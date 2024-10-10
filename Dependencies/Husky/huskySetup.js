import { execSync } from 'child_process'
import fs from 'fs'

import { huskyCommitMsgContent } from './config/commitMsg.js'
import { huskyPreCommitContent } from './config/preCommitFile.js'
import { huskyPrePushContent } from './config/prePushFile.js'

export function setupHusky(projectPath) {
  execSync(
    'npm install husky @commitlint/{cli,config-conventional} --save-dev',
    {
      stdio: 'inherit',
      cwd: projectPath,
    },
  )
  console.log('Installed Husky.')

  execSync('npx husky install', {
    stdio: 'inherit',
    cwd: projectPath,
  })

  fs.mkdirSync(`${projectPath}/.husky`, { recursive: true })

  fs.writeFileSync(`${projectPath}/.husky/pre-commit`, huskyPreCommitContent, {
    mode: 0o755,
  })
  fs.writeFileSync(`${projectPath}/.husky/commit-msg`, huskyCommitMsgContent, {
    mode: 0o755,
  })
  fs.writeFileSync(`${projectPath}/.husky/pre-push`, huskyPrePushContent, {
    mode: 0o755,
  })

  fs.writeFileSync(
    `${projectPath}/commitlint.config.js`,
    `module.exports = {
  extends: ['@commitlint/config-conventional'],
};`,
  )
  console.log('Husky pre-commit, pre-push, commit-msg hooks set up.')
}
