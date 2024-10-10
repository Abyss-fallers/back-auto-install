import { execSync } from 'child_process'

export function setupCors(projectPath) {
  execSync('npm install cors', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed CORS.')
}
