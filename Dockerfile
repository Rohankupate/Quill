
# Use Node.js LTS version
FROM node:19.5.0-alpine

RUN npm install -g pnpm
# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm install 

# Copy workspace contents
COPY . .

# Compile TypeScript
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]