export const gitattributesFileContent = `# Устанавливаем текстовые файлы в кодировке UTF-8
* text=auto

# Указываем для JavaScript и TypeScript
*.js text
*.ts text

# Указываем для Markdown
*.md text

# Указываем для JSON
*.json text

# Указываем для файлов конфигурации
*.yml text
*.yaml text
*.toml text

# Указываем для Dockerfile
Dockerfile text

# Указываем для скриптов
*.sh text

# Указываем для логов, чтобы они не обрабатывались
*.log binary

# Указываем для двоичных файлов, чтобы они не обрабатывались
*.zip binary
*.tar binary
*.tgz binary
*.gz binary
`
