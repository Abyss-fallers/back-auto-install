import { execSync } from 'child_process'
import fs from 'fs'

import { mochaFileContent } from './config/mochaFileConfig.js'

export function setupMocha(projectPath) {
  execSync('npm install mocha @types/mocha --save-dev', {
    stdio: 'inherit',
    cwd: projectPath,
  })
  console.log('Installed Mocha.')

  fs.writeFileSync(`${projectPath}/.mocharc.json`, mochaFileContent)

  console.log('.mocharc.json file created successfully.')
}
