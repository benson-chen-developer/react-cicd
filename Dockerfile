# Start your image with a node base image
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci
RUN npm install -g serve@latest

# Copy only the built Vite app (from previous build)
COPY dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist"]
