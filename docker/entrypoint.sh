#!/usr/bin/env sh

echo "Starting uni-resolver-frontend"

if [ "$BACKEND_URL" ]
then
  echo "Substituting backendUrl with ${BACKEND_URL}"
  envsubst < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js
else
  echo "Using default URL https://dev.uniresolver.io"
fi

nginx -g 'daemon off;'