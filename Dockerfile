FROM node:latest
WORKDIR /opt/frontend
COPY package.json .
COPY package-lock.json .
COPY gatsby-config.js .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 opt/frontend /usr/share/nginx/html
