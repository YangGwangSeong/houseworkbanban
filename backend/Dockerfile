FROM node:16-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "start"]


# FROM node:16-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# CMD ["node", "dist/main"]