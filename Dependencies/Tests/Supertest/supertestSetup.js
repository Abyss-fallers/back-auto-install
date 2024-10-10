import { execSync } from 'child_process'

export function setupSupertest(projectPath) {
  execSync('npm install supertest @types/supertest --save-dev', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed Supertest.')
}
