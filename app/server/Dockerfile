FROM node:22

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx prisma migrate reset --force

EXPOSE 3000

CMD ["npm", "run", "start"]
