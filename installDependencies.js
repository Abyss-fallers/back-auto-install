import { execSync } from 'child_process'
import fs from 'fs'
import { setupDocker, setupHusky, setupPrettier } from './Dependencies/index.js'

export function installDependencies(answers, projectPath) {
	execSync('npm install dotenv nodemon', {
		stdio: 'inherit',
		cwd: projectPath,
	})
	console.log('Installed dotenv and nodemon.')

	if (answers.useTypeScript === 'Yes') {
		execSync('npm install typescript @types/node --save-dev', {
			stdio: 'inherit',
			cwd: projectPath,
		})
		console.log('Installed TypeScript and type definitions.')
	}

	if (answers.useESLint === 'Yes') {
		execSync('npm install eslint --save-dev', {
			stdio: 'inherit',
			cwd: projectPath,
		})
		console.log('Installed ESLint.')
	}

	if (answers.usePrettier === 'Yes') {
		setupPrettier(projectPath)
	}

	if (answers.useHusky === 'Yes') {
		setupHusky(projectPath)
	}

	if (answers.useDocker === 'Yes') {
		setupDocker(projectPath)
	}

	switch (answers.backendFramework) {
		case 'Express':
			execSync('npm install express', { stdio: 'inherit', cwd: projectPath })
			console.log('Installed Express.')
			break
		case 'NestJS':
			execSync('npm install @nestjs/core @nestjs/common', {
				stdio: 'inherit',
				cwd: projectPath,
			})
			console.log('Installed NestJS.')
			break
		case 'Fastify':
			execSync('npm install fastify', { stdio: 'inherit', cwd: projectPath })
			console.log('Installed Fastify.')
			break
	}

	if (answers.useMorgan === 'Yes') {
		execSync('npm install morgan', { stdio: 'inherit', cwd: projectPath })
		console.log('Installed Morgan.')
	}

	if (answers.useCors === 'Yes') {
		execSync('npm install cors', { stdio: 'inherit', cwd: projectPath })
		console.log('Installed CORS.')
	}

	if (answers.useHelmet === 'Yes') {
		execSync('npm install helmet', { stdio: 'inherit', cwd: projectPath })
		console.log('Installed Helmet.')
	}

	if (answers.useTestingLibraries && answers.useTestingLibraries.length > 0) {
		const testingLibraries = answers.useTestingLibraries.join(' ')
		execSync(`npm install ${testingLibraries} --save-dev`, {
			stdio: 'inherit',
			cwd: projectPath,
		})
		console.log(`Installed testing libraries: ${testingLibraries}.`)
	}

	const envContent = `# Environment variables\n`
	fs.writeFileSync(`${projectPath}/.env`, envContent)
	console.log('.env file created successfully.')
}
