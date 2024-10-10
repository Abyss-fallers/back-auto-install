import fs from 'fs'

import { editorconfigFileContent } from './Config/editorconfigFile.js'

export function setupEditorconfig(projectPath) {
  fs.writeFileSync(`${projectPath}/.editorconfig`, editorconfigFileContent)
  console.log('.editorconfig file created successfully.')
}
