import { execSync } from 'child_process'

export function setupFastify(projectPath) {
  execSync('npm install fastify', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed Fastify.')
}
