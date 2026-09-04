#!/usr/bin/env bash
# Cloudflare DNS, scoped to the regentribe.co zone only.
#   cf-dns.sh list [filter] | get <name> | set <type> <name> <content> | delete <name>
#
# Token: $CF_DNS_TOKEN if set, otherwise read from Bitwarden (vault must be
# unlocked, with the session in ~/.bw-session).
set -uo pipefail

ZONE=8954410ea0fff7b4db7e60c11f7872f2
API="https://api.cloudflare.com/client/v4/zones/$ZONE/dns_records"
BW_ITEM='Cloudflare — DNS + Email + Pages (regentribe.co)'

resolve_token() {
  if [ -n "${CF_DNS_TOKEN:-}" ]; then printf '%s' "$CF_DNS_TOKEN"; return 0; fi

  local sess
  sess=$(cat ~/.bw-session 2>/dev/null || true)
  if [ -z "$sess" ]; then
    echo "cf-dns: no CF_DNS_TOKEN, and no ~/.bw-session." >&2
    echo "        Run: bw unlock --raw > ~/.bw-session && chmod 600 ~/.bw-session" >&2
    return 1
  fi

  local state
  state=$(bw status --session "$sess" 2>/dev/null | jq -r '.status // "unknown"')
  if [ "$state" != "unlocked" ]; then
    echo "cf-dns: Bitwarden is '$state' — the session has expired." >&2
    echo "        Run: bw unlock --raw > ~/.bw-session && chmod 600 ~/.bw-session" >&2
    return 1
  fi

  local tok
  tok=$(bw get item "$BW_ITEM" --session "$sess" 2>/dev/null \
        | jq -r '.notes // empty' | grep -oE 'cfut_[A-Za-z0-9_-]+' | head -1)
  if [ -z "$tok" ]; then
    echo "cf-dns: unlocked, but no cfut_ token found in '$BW_ITEM'." >&2
    return 1
  fi
  printf '%s' "$tok"
}

TOKEN=$(resolve_token) || exit 1
A=(-H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json")

# Short label -> fully qualified name
fq() { case "$1" in *regentribe.co) printf '%s' "$1";; *) printf '%s.regentribe.co' "$1";; esac; }

# Fail loudly if Cloudflare rejects the call, rather than printing nothing.
check() {
  local body="$1" what="$2"
  if [ "$(printf '%s' "$body" | jq -r '.success // false')" != "true" ]; then
    echo "cf-dns: $what failed — $(printf '%s' "$body" | jq -r '[.errors[]?.message] | join("; ")')" >&2
    return 1
  fi
}

case "${1:-}" in
  list)
    r=$(curl -s "$API?per_page=100" "${A[@]}"); check "$r" "list" || exit 1
    printf '%s' "$r" | jq -r --arg f "${2:-}" \
      '.result[] | select($f=="" or (.name|test($f;"i"))) | "\(.type)\t\(.name)\t\(.content)"'
    ;;
  get)
    r=$(curl -s "$API?name=$(fq "$2")" "${A[@]}"); check "$r" "get" || exit 1
    printf '%s' "$r" | jq -r '.result[]? | "\(.type)\t\(.name)\t\(.content)"'
    ;;
  set)
    name=$(fq "$3")
    body=$(jq -nc --arg t "$2" --arg n "$name" --arg c "$4" '{type:$t,name:$n,content:$c,ttl:3600}')
    existing=$(curl -s "$API?name=$name" "${A[@]}"); check "$existing" "lookup" || exit 1

    # More than one record on a name is a real hazard for DKIM/SPF — say so.
    count=$(printf '%s' "$existing" | jq -r '.result | length')
    if [ "$count" -gt 1 ]; then
      echo "cf-dns: WARNING — $count records already exist at $name." >&2
      echo "        Updating the first only; the others remain. Delete them explicitly." >&2
    fi

    id=$(printf '%s' "$existing" | jq -r '.result[0].id // empty')
    if [ -n "$id" ]; then
      r=$(curl -s -X PUT "$API/$id" "${A[@]}" --data "$body"); check "$r" "update" || exit 1
      echo "updated: $name"
    else
      r=$(curl -s -X POST "$API" "${A[@]}" --data "$body"); check "$r" "create" || exit 1
      echo "created: $name"
    fi
    ;;
  delete)
    name=$(fq "$2")
    r=$(curl -s "$API?name=$name" "${A[@]}"); check "$r" "lookup" || exit 1
    id=$(printf '%s' "$r" | jq -r '.result[0].id // empty')
    if [ -z "$id" ]; then echo "no record at $name"; exit 0; fi
    d=$(curl -s -X DELETE "$API/$id" "${A[@]}"); check "$d" "delete" || exit 1
    echo "deleted: $name"
    ;;
  *)
    echo "usage: cf-dns.sh {list [filter] | get <name> | set <type> <name> <content> | delete <name>}" >&2
    exit 2
    ;;
esac
