export const gitignoreFileContent = `# Node.js
node_modules/
package-lock.json
yarn-error.log
yarn.lock

# TypeScript
dist/
*.tsbuildinfo
*.js
*.jsx
*.map

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDEs
.idea/
.vscode/

# OS-specific files
.DS_Store
Thumbs.db
ehthumbs.db
Desktop.ini

# Testing
coverage/
*.lcov

# Docker
Dockerfile
docker-compose.yml
.dockerignore

# Misc
*.tgz
*.zip
`
