# Stage 1 - the build process
FROM node:14 as build-deps
WORKDIR /app
COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
RUN npm install
RUN npm run build 



# Stage 2 - the production environment
FROM nginx
COPY --from=build-deps /app/build /usr/share/nginx/html
RUN apt-get update && apt-get install -y transmission-daemon
RUN sed -i 's/"rpc-authentication-required": true/"rpc-authentication-required": false/' /etc/transmission-daemon/settings.json
RUN transmission-daemon 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
