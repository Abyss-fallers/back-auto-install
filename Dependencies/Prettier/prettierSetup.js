import { execSync } from 'child_process'
import fs from 'fs'
import { prettierConfig } from './config/prettierConfig.js'
import { prettierIgnoreContent } from './config/prettierIgnore.js'

export function setupPrettier(projectPath) {
	execSync(
		'npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev',
		{
			stdio: 'inherit',
			cwd: projectPath,
		}
	)
	console.log('Installed Prettier.')

	fs.writeFileSync(
		`${projectPath}/.prettierrc`,
		JSON.stringify(prettierConfig, null, 2)
	)
	console.log('Prettier config created successfully.')

	fs.writeFileSync(
		`${projectPath}/.prettierignore`,
		prettierIgnoreContent.trim()
	)
	console.log('.prettierignore file created successfully.')
}
