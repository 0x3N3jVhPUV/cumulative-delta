# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle the application source inside the Docker image
COPY . .

# The application listens on port 3000 at runtime
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]
