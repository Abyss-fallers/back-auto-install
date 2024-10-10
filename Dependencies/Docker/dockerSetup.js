import fs from 'fs'

import { dockerFileContent } from './config/dockerFileConfig.js'
import { dockerIgnoreContent } from './config/dockerIgnoreConfig.js'

export function setupDocker(projectPath) {
  fs.writeFileSync(`${projectPath}/Dockerfile`, dockerFileContent)
  console.log('Dockerfile created successfully.')

  fs.writeFileSync(`${projectPath}/.dockerignore`, dockerIgnoreContent)
  console.log('.dockerignore file created successfully.')
}
