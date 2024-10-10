import inquirer from 'inquirer'
import { questions } from './questions.js'
import { setupProject } from './setupProject.js'

async function runSetup() {
  try {
    const answers = await inquirer.prompt(questions)
    const projectPath = await setupProject(answers)

    if (projectPath) {
      console.log('Project has been set up at:', projectPath)
    } else {
      console.error('Failed to set up the project. No path returned.')
    }
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

runSetup()
