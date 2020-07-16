FROM nginx:alpine
ADD ./output/bundle.js /usr/share/nginx/html/bundle.js
ADD ./docker/index.html /usr/share/nginx/html/index.html
ADD ./src/images /usr/share/nginx/html/images
ADD ./src/favicon.ico /usr/share/nginx/html/
COPY ./src/env.js /usr/share/nginx/html/
COPY ./src/env.template.js /usr/share/nginx/html/

COPY ./docker/entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
