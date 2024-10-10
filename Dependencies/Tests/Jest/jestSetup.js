import { execSync } from 'child_process'

export function setupJest(projectPath) {
  execSync(
    'npm install jest @types/jest ts-jest eslint-plugin-jest --save-dev',
    {
      stdio: 'inherit',
      cwd: projectPath,
    },
  )
  console.log('Installed Jest.')

  execSync('npx ts-jest config:init', {
    stdio: 'inherit',
    cwd: projectPath,
  })

  console.log('Jest set up.')
}
