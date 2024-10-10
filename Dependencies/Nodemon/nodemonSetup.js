import { execSync } from 'child_process'

export function setupNodemon(projectPath) {
  execSync('npm install nodemon --save-dev', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed Nodemon.')
}
