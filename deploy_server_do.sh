#! /bin/bash
yarn build:server
docker build -t rkedmenec/car-share:latest .
docker push rkedmenec/car-share:latest
ssh root@209.97.139.146 "docker pull rkedmenec/car-share:latest && docker tag rkedmenec/car-share:latest dokku/car-share:latest && dokku tags:deploy car-share latest"