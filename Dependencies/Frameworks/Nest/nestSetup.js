import { execSync } from 'child_process'

export function setupNest(projectPath) {
  execSync('npm install @nestjs/core @nestjs/common', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed NestJS.')
}
