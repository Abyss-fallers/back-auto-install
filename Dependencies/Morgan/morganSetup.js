import { execSync } from 'child_process'

export function setupMorgan(projectPath) {
  execSync('npm install morgan', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed Morgan.')
}
