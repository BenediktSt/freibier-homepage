#!/bin/bash
echo $PORT
sed -i "s/PLACEHOLDER/$PORT/g" /nginx.conf
cp /nginx.conf /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
