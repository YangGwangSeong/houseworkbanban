# FROM node:16-alpine

# WORKDIR /app

# COPY ./package*.json ./

# RUN npm ci

# COPY . .

# CMD ["npm", "run", "start"]


# FROM node:16-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# CMD ["node", "dist/main"]

# FROM node:16-alpine

# # Create app directory
# WORKDIR /app

# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Bundle app source
# COPY . .

# # Creates a "dist" folder with the production build
# RUN npm run build

# # Start the server using the production build
# CMD [ "node", "dist/main.js" ]


FROM node:16-alpine

WORKDIR /app
## Step 1의 builder에서 build된 프로젝트를 가져온다
COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run --script build

## application 실행
CMD ["npm", "run", "start:prod"]