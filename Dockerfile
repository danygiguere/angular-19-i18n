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
RUN npm run build -- --configuration=production

# Stage 3: Production environment
FROM nginx:alpine AS production

# Copy the built app from the build stage
COPY --from=build /app/dist/angular-19-i18n/browser /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
