# Multistage build pattern
# (https://docs.docker.com/develop/develop-images/multistage-build/)
# Use one image with node to build the app
FROM node:13.12.0-alpine as build
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN pwd
RUN ls
RUN npm run build

# production environment
FROM nginx:1.21.0-alpine
# Copy built source code into Nginx directory
COPY --from=build /build /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]