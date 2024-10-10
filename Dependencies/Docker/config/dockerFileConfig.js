export const dockerFileContent = `# Use official Node.js image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port (default for Node.js apps)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
`
