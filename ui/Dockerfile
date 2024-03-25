# Use a lightweight Node.js image as the base
FROM node:20.5.0-alpine

# Clear npm cache
# RUN npm cache clean --force

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install

EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]
