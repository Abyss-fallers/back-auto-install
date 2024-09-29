import { execSync } from 'child_process'
import path from 'path'

import { installDependencies } from './installDependencies.js'
export function setupProject(answers) {
	const projectPath = path.join(process.cwd(), answers.projectName)

	execSync(`mkdir ${answers.projectName}`, { stdio: 'inherit' })

	execSync('npm init -y', { stdio: 'inherit', cwd: projectPath })

	installDependencies(answers, projectPath)

	console.log('Project setup complete!')
}
