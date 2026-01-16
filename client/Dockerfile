FROM node:20-alpine 

WORKDIR /client

COPY package*.json ./
RUN npm install --include=optional
COPY . .

EXPOSE 5174
CMD [ "npm", "run", "dev" ]