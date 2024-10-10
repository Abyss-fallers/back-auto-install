export { setupCors } from './CORS/corsSetup.js'
export { setupDocker } from './Docker/dockerSetup.js'
export { setupEditorconfig } from './editorconfig/editorconfigSetup.js'
export { setupDotenv } from './ENV/dotenvSetup.js'
export { setupESLint } from './ESLint/eslintSetup.js'
export { setupExpress, setupFastify, setupNest } from './Frameworks/index.js'
export { setupGit } from './git/gitSetup.js'
export { setupHelmet } from './Helmet/helmetSetup.js'
export { setupHusky } from './Husky/huskySetup.js'
export { setupMorgan } from './Morgan/morganSetup.js'
export { setupNodemon } from './Nodemon/nodemonSetup.js'
export { setupPrettier } from './Prettier/prettierSetup.js'
export {
  setupChai,
  setupJest,
  setupMocha,
  setupSupertest,
} from './Tests/index.js'
export { setupTypeScript } from './TypeScript/typescriptSetup.js'
