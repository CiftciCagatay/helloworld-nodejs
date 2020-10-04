FROM node:alpine

COPY . .

RUN npm install

EXPOSE 11130

CMD ["npm", "start"]
