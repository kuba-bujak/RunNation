# Use the Node.js base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the server app files
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the server app
CMD ["npm", "start"]