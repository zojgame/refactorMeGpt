FROM node
WORKDIR /src
COPY package.json ./
RUN npm install
COPY . ./src
EXPOSE 5173
CMD ["npm", "run", "dev"]