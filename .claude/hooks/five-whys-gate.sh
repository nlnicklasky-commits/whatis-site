#!/bin/bash
# five-whys-gate.sh — Prevents the Five Whys agent hook from looping.
#
# How it works:
#   - First time Stop fires: no flag file → create it → exit 0 (let agent hook run)
#   - Second time Stop fires: flag file exists → remove it → exit 0 (agent hook
#     sees [FIVE_WHYS_COMPLETE] marker in transcript and returns {ok: true})
#
# The flag file is per-session so concurrent sessions don't interfere.
# Stale flags are cleaned up automatically (the file only persists for one cycle).

INPUT=$(cat)
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // "unknown"')

FLAG_DIR="/tmp/claude-five-whys"
FLAG_FILE="$FLAG_DIR/$SESSION_ID"

mkdir -p "$FLAG_DIR" 2>/dev/null

if [ -f "$FLAG_FILE" ]; then
  # Second stop — clean up the flag, allow stop
  rm -f "$FLAG_FILE"
  exit 0
else
  # First stop — set the flag, allow the agent hook to evaluate
  touch "$FLAG_FILE"
  exit 0
fi
