export const huskyCommitMsgContent = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Проверка формата сообщения коммита
npx commitlint --edit "$1"
`
