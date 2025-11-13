# Use official Node image for building the app
FROM node:20-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your app and build it
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine

# Copy the build output from the previous stage into Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx web server
CMD ["nginx", "-g", "daemon off;"]
