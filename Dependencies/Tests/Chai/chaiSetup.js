import { execSync } from 'child_process'

export function setupChai(projectPath) {
  execSync('npm install chai @types/chai --save-dev', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed Chai.')
}
