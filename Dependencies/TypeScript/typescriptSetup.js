import { execSync } from 'child_process'
import fs from 'fs'

import { tsConfigContent } from './config/tsconfig.js'

export function setupTypeScript(projectPath) {
  execSync('npm install typescript @types/node --save-dev', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed TypeScript and type definitions.')

  const tsConfigPath = `${projectPath}/tsconfig.json`

  if (!fs.existsSync(tsConfigPath)) {
    fs.writeFileSync(tsConfigPath, tsConfigContent.trim())
    console.log('tsconfig.json created successfully.')
  } else {
    console.log('tsconfig.json already exists.')
  }
}
