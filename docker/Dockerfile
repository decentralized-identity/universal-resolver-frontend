# Dockerfile for universalresolver/universal-resolver-frontend

FROM node:14.15 AS build
MAINTAINER Markus Sabadello <markus@danubetech.com>

# build universal-resolver-frontend

ADD . /opt/universal-resolver-frontend/
RUN cd /opt/universal-resolver-frontend && npm install && yarn run build

# build image

FROM nginx:alpine
MAINTAINER Markus Sabadello <markus@danubetech.com>

COPY --from=build /opt/universal-resolver-frontend/output/bundle.js /usr/share/nginx/html/bundle.js
ADD ./docker/index.html /usr/share/nginx/html/index.html
ADD ./src/images /usr/share/nginx/html/images
ADD ./src/favicon.ico /usr/share/nginx/html/
COPY ./src/env.js /usr/share/nginx/html/
COPY ./src/env.template.js /usr/share/nginx/html/
RUN sed -i 's/listen       80/listen       7081/g' /etc/nginx/conf.d/default.conf

# done

EXPOSE 7081
COPY ./docker/entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
