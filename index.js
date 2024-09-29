import inquirer from 'inquirer'
import { questions } from './questions.js'
import { setupProject } from './setupProject.js'

async function runSetup() {
	try {
		const answers = await inquirer.prompt(questions)

		const projectPath = setupProject(answers)
	} catch (error) {
		console.error('Error:', error)
		process.exit(1)
	}
}

runSetup()
