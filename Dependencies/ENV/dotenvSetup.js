import { execSync } from 'child_process'
import fs from 'fs'

import { envFileContent } from './config/envFileConfig.js'

export function setupDotenv(projectPath) {
  fs.writeFileSync(`${projectPath}/.env`, envFileContent)
  console.log('.env file created successfully.')

  execSync('npm install dotenv', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed dotenv.')
}
