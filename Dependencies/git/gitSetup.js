import fs from 'fs'
import { gitattributesFileContent } from './config/gitattributesFile.js'
import { gitignoreFileContent } from './config/gitignoreFile.js'

export function setupGit(projectPath) {
  fs.writeFileSync(`${projectPath}/.gitignore`, gitignoreFileContent)
  fs.writeFileSync(`${projectPath}/.gitattributes`, gitattributesFileContent)

  console.log('.gitignore, .gitattributes files created successfully')
}
