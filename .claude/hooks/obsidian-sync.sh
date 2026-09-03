#!/usr/bin/env bash
# PostToolUse hook: remind Claude to keep the Obsidian write-ups in sync.
# Vault location resolves in this order:
#   1. $REGENTRIBE_OBSIDIAN_DIR  (override for non-standard setups)
#   2. the standard iCloud Obsidian path under the current user's $HOME
# If the vault isn't present on this machine, the hook stays silent.
set -uo pipefail

DEFAULT_DIR="$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/obsid-mycolive/Regen Tribe/RT website"
VAULT_DIR="${REGENTRIBE_OBSIDIAN_DIR:-$DEFAULT_DIR}"

if [ ! -d "$VAULT_DIR" ]; then
  # No vault on this machine — emit nothing rather than sending Claude to a dead path.
  exit 0
fi

MSG="OBSIDIAN SYNC REQUIRED: You just edited a Regen Tribe website file. Before finishing, update the matching Obsidian write-up in: ${VAULT_DIR}"

jq -nc --arg ctx "$MSG" \
  '{hookSpecificOutput:{hookEventName:"PostToolUse",additionalContext:$ctx}}'
