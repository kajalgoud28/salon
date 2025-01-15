# Use the official Node.js image.
FROM node:16

# Set the working directory inside the container.
WORKDIR /app

# Copy package files and install dependencies.
COPY package*.json ./
RUN npm install

# Copy all project files.
COPY . .

# Expose the port the app runs on.
EXPOSE 3000

# Start the application.
CMD ["npm", "start"]
