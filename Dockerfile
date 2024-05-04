FROM node:18-alpine AS next

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN yarn install

# start app
RUN yarn build
#EXPOSE 3030
#CMD yarn start

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/app.conf
WORKDIR /var/www/
RUN rm -rf /etc/nginx/sites-enabled/default
RUN rm -rf /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=next /usr/src/dist .

CMD ["nginx", "-g", "daemon off;"]




