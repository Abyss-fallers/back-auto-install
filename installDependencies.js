import {
  setupChai,
  setupCors,
  setupDocker,
  setupDotenv,
  setupEditorconfig,
  setupESLint,
  setupExpress,
  setupFastify,
  setupGit,
  setupHelmet,
  setupHusky,
  setupJest,
  setupMocha,
  setupMorgan,
  setupNest,
  setupNodemon,
  setupPrettier,
  setupSupertest,
  setupTypeScript,
} from './Dependencies/index.js'

export function installDependencies(answers, projectPath) {
  setupESLint(projectPath)
  setupPrettier(projectPath)
  setupNodemon(projectPath)
  setupDotenv(projectPath)
  setupGit(projectPath)
  setupEditorconfig(projectPath)

  if (answers.useTypeScript === 'Yes') {
    setupTypeScript(projectPath)
  }

  if (answers.useHusky === 'Yes') {
    setupHusky(projectPath)
  }

  if (answers.useDocker === 'Yes') {
    setupDocker(projectPath)
  }

  switch (answers.backendFramework) {
    case 'Express':
      setupExpress(projectPath)
      break
    case 'NestJS':
      setupNest(projectPath)
      break
    case 'Fastify':
      setupFastify(projectPath)
      break
  }

  if (answers.useMorgan === 'Yes') {
    setupMorgan(projectPath)
  }

  if (answers.useCors === 'Yes') {
    setupCors(projectPath)
  }

  if (answers.useHelmet === 'Yes') {
    setupHelmet(projectPath)
  }

  if (answers.useTestingLibraries && answers.useTestingLibraries.length > 0) {
    answers.useTestingLibraries.forEach((library) => {
      switch (library) {
        case 'Jest':
          setupJest(projectPath)
          break
        case 'Mocha':
          setupMocha(projectPath)
          break
        case 'Chai':
          setupChai(projectPath)
          break
        case 'Supertest':
          setupSupertest(projectPath)
          break
      }
    })
  }
}
