FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application for production with SSR
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy only the built application from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Set environment variables
ENV NODE_ENV=production
ENV PORT=80

# Expose the port the app runs on
EXPOSE 80

# Start the server
CMD ["node", "dist/angular-19-i18n/server/server.mjs"]
