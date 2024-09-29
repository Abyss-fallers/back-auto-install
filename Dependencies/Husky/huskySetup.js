import { execSync } from 'child_process'
import fs from 'fs'

import { huskyPreCommitContent } from './config/huskyConfig.js'

export function setupHusky(projectPath) {
	execSync('npm install husky --save-dev', {
		stdio: 'inherit',
		cwd: projectPath,
	})
	console.log('Installed Husky.')

	execSync('npx husky install', {
		stdio: 'inherit',
		cwd: projectPath,
	})

	if (!fs.existsSync(`${projectPath}/.husky`)) {
		fs.mkdirSync(`${projectPath}/.husky`, { recursive: true })
	}

	fs.writeFileSync(`${projectPath}/.husky/pre-commit`, huskyPreCommitContent, {
		mode: 0o755,
	})
	console.log('Husky pre-commit hook set up.')
}
