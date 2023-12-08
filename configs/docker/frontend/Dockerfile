FROM node:20-alpine as frontend
RUN apk add git
# ENV NODE_ENV production 

# add turborepo
RUN npm i -g pnpm

# Set working directory
WORKDIR /app

# Copy source files
COPY . .
RUN rm -rf apps/frontend/node_modules
RUN rm -rf node_modules

# Install app dependencies
RUN pnpm install && pnpm frontend:build

# NGINX
FROM nginx:latest

WORKDIR /app

RUN rm /etc/nginx/conf.d/default.conf

COPY ./configs/docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend /app/apps/frontend/build /app/build
