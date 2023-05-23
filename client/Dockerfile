# Use the Node.js base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the client app files
COPY . .

# Build the client app
RUN npm run build

# Stage 2: Serve the built client app with a lightweight web server
FROM nginx:alpine

# Copy the built client app from the previous stage
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]