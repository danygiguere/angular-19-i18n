# Stage 1: Build the Angular app with development dependencies
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies first to leverage Docker cache
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

# Build the application with development configuration
RUN npm run build -- --configuration=development

# Stage 2: Development environment
FROM node:20-alpine AS development

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install development dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Start the development server
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--disable-host-check"]

# Stage 3: Production environment
FROM nginx:alpine AS production

# Copy the built app from the build stage
COPY --from=build /app/dist/angular-19-i18n /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
