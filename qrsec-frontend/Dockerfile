FROM node:16.13-alpine

# set working directory
WORKDIR /front

ENV PATH /qrsec-frontend/node_modules/.bin:$PATH

# add app
COPY . ./

# install app dependencies
RUN npm install --silent
RUN npm run build
RUN npm install -g serve

# start app
CMD ["serve", "-s", "build", "-p", "80"]
