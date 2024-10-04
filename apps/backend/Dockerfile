# Stage 1: Base image for building
FROM node:20-alpine AS base

# Install pnpm globally
RUN npm i -g pnpm

# Create working directory
WORKDIR /app

# Copy root package files and workspace config
COPY package.json pnpm-lock.yaml ./pnpm-workspace.yaml ./

# Copy source code for the backend
COPY ./apps/backend ./apps/backend
COPY ./prisma ./prisma
COPY ./tsconfig.json ./tsconfig.json
COPY ./libs ./libs
COPY ./.env ./.env

# # Install dependencies for all workspaces
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @gym-mate/backend build:ts

# # Stage 2: Final image for production
# FROM node:20-alpine

# # Create working directory
# WORKDIR /app

# # Copy files from the build stage
# COPY --from=base /app/apps/backend /app
# COPY --from=base /app/node_modules /node_modules
# COPY --from=base /app/prisma /prisma
# COPY --from=base /app/tsconfig.json /tsconfig.json
# COPY --from=base /app/.env /.env
# COPY --from=base /app/package.json /package.json

# Expose port (if the backend uses port 3000)
EXPOSE 3000

# WORKDIR /app/backend
# Start the backend
# CMD ["pnpm", "start:backend"]
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm start:backend"]