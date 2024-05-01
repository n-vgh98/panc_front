
FROM node:18-alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN yarn

# start app
RUN yarn build
EXPOSE 3030
CMD yarn start