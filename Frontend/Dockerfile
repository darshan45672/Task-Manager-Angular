FROM node:23-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x ./node_modules/.bin/ng
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/Frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
