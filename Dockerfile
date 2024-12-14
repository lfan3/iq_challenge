# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Install OpenSSL
RUN apk add --no-cache openssl

# Set the working directory in the container
WORKDIR /mind-game

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended.
RUN npm i sharp

# Copy the rest of the application code to the container
COPY . .

# Install sqlite3
RUN apk add --no-cache sqlite

# Generate Prisma Client
RUN npx prisma generate 

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]