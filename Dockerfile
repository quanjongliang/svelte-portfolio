# Sử dụng  Image Base Node.js phiên bản 18
FROM node:hydrogen-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build
EXPOSE 9999
CMD [ "npm", "run", "preview"]
