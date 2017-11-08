## Reverse Proxy
FROM nginx:1.13.3-alpine
RUN apk add --no-cache bash

LABEL maintainer = "benediktstraube@hotmail.de"

## Copy our default nginx config
COPY nginx.conf /nginx.conf
RUN chmod 777 /nginx.conf

COPY launch.sh /launch.sh
RUN chmod +x /launch.sh

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY /dist /usr/share/nginx/html

CMD ["bash", "/launch.sh"]

