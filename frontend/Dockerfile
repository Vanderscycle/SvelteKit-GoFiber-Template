# taken from https://myrmod.de/posts/how-to-host-a-sveltekit-project-with-docker-https
### Build Step
# pull the Node.js Docker image
FROM node:lts-alpine as builder

# change working directory
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./

# run npm install in our local machine
RUN npm i

# copy the generated modules and all other files to the container
COPY . .

# build the application
RUN npm run build

### Serve Step
# pull the Node.js Docker image
FROM node:lts-alpine

# change working directory
WORKDIR /app

# copy files from previous step
COPY --from=builder /usr/src/app/.svelte-kit .
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/node_modules ./node_modules

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 5000

# the command that starts our app
CMD ["node", "index.js"]
