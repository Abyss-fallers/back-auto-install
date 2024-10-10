export const huskyPreCommitContent = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Запуск ESLint для проверки кода перед коммитом
npm run lint

# Запуск тестов перед коммитом
npm test

# Если проверки не проходят, прерываем коммит
if [ $? -ne 0 ]; then
  echo "Проверки не прошли. Коммит отменен."
  exit 1
fi
`
