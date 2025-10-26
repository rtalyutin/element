FROM node:20-alpine AS build

WORKDIR /opt/build/spa

# Copy dependency manifests first for better build caching
COPY spa/package.json spa/package-lock.json ./

# Install dependencies in the SPA workspace
RUN npm ci

# Copy the rest of the SPA sources
COPY spa/ ./

# Build the production bundle
RUN npm run build

# Final stage just packages the build artifacts
FROM node:20-alpine

WORKDIR /opt/app

COPY --from=build /opt/build/spa/build ./build

CMD ["npx", "serve", "build"]
