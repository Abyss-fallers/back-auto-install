import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

import { installDependencies } from './installDependencies.js'

export function setupProject(answers) {
  const projectPath = path.join(process.cwd(), answers.projectName)

  if (!fs.existsSync(projectPath)) {
    execSync(`mkdir ${answers.projectName}`, { stdio: 'inherit' })
  } else {
    console.error(
      `Directory ${projectPath} already exists. Please choose a different project name.`,
    )
    process.exit(1)
  }

  execSync('npm init -y', { stdio: 'inherit', cwd: projectPath })

  installDependencies(answers, projectPath)

  console.log('Project setup complete!')
  return projectPath
}
