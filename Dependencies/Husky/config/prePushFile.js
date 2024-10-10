export const huskyPrePushContent = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Запускаем тесты перед пушем
npm test

# Если тесты не проходят, прерываем пуш
if [ $? -ne 0 ]; then
  echo "Тесты не прошли. Пуш отменен."
  exit 1
fi
`
