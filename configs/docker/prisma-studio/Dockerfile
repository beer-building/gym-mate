# Stage 1: Base image for building
FROM node:20-alpine AS base

# Install pnpm globally
RUN npm i -g pnpm

# Create working directory
WORKDIR /app

# Copy root package files and workspace config
COPY package.json pnpm-lock.yaml ./pnpm-workspace.yaml ./

COPY ./prisma ./prisma
COPY ./.env ./.env

RUN pnpm install --frozen-lockfile

# # Stage 2: Final image for production
# FROM node:20-alpine

# # Create working directory
# WORKDIR /app

# # Copy files from the build stage
# COPY --from=base /app/node_modules /node_modules
# COPY --from=base /app/prisma /prisma
# COPY --from=base /app/.env /.env

EXPOSE 5555

CMD ["pnpm", "prisma", "studio", "-n", "0.0.0.0"]