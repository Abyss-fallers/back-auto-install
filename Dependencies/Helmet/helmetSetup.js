import { execSync } from 'child_process'

export function setupHelmet(projectPath) {
  execSync('npm install helmet', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed Helmet.')
}
