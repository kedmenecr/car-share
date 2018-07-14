cd packages/common
yarn build
cd ..
cd server
yarn build
cd ../..
docker build -t rkedmenec/car-share:$1 . 
docker push rkedmenec/car-share:$1 
