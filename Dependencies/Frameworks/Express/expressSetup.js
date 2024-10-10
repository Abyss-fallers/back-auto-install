import { execSync } from 'child_process'

export function setupExpress(projectPath) {
  execSync('npm install express', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed Express.')
}
