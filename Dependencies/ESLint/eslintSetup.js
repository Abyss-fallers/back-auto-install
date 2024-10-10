import { execSync } from 'child_process'

export function setupESLint(projectPath) {
  execSync('npm install eslint --save-dev', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed ESLint and base configuration.')
}
