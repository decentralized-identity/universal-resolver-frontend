Frontend for DIF Universal Resolver
-----------------------------------

See https://github.com/decentralized-identity/universal-resolver/


# Running the Frontend for the Universal Resolver

## Prepare

Install all dependencies

    npm install

## Running in Dev

Following command will run the frontend on your local machine at http://localhost:7081/

    npm run dev

## Running in Prod

Production build and creating & runnig a docker container. The frontend will be accessible at http://localhost:80/

    npm run build
    docker build -f ./docker/Dockerfile . -t universalresolver/uni-resolver-frontend 
    docker run -p 80:80 universalresolver/uni-resolver-frontend
