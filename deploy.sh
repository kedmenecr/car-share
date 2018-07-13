cd packages/common
yarn build
cd ..
cd server
yarn build
cd ../..
docker build -t rkedmenec/car-share:$1 . 
docker run -p 49160:4000 -d rkedmenec/car-share:$1