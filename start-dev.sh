#!/usr/bin/env bash
# Start the Next.js dev server from anywhere.
set -euo pipefail

# Run from the repo root, wherever this script happens to live.
cd "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Pick up an nvm-managed Node if one is installed (rnf-site needs >=22.12).
if [ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]; then
  # shellcheck disable=SC1091
  . "${NVM_DIR:-$HOME/.nvm}/nvm.sh"
  nvm use --silent >/dev/null 2>&1 || true
fi

if ! command -v node >/dev/null 2>&1; then
  echo "node not found on PATH. Install Node 22.12+ and retry." >&2
  exit 1
fi

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$NODE_MAJOR" -lt 22 ]; then
  echo "Node $(node -v) is too old — rnf-site requires >=22.12.0." >&2
  exit 1
fi

if [ ! -f .env.local ]; then
  echo "Warning: .env.local is missing — Supabase-backed forms will not work." >&2
  echo "Get the values from Bitwarden: 'Regen Tribe Website — .env.local'" >&2
fi

npm run dev
