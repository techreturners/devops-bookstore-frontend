# DevOps Bookstore

A sample [React](https://reactjs.org/) app and accompanying Dockerfile for publishing the built app to [NGINX](https://www.nginx.com/)


## Instructions

### Fork and Clone

Firstly make sure you [fork this repository](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/about-forks) to your own GitHub account and the clone your forked version down to your local computer.

### Running in Docker

The application can be deployed as a Docker container.

In order to run in docker firstly build the docker image.

It will utilse the Docker [multi-stage build concept](https://docs.docker.com/develop/develop-images/multistage-build/). Firstly utilising a node image to build the react app. Then it will take the output of that build phase and place it into an [Nginx image](https://hub.docker.com/_/nginx) and run as a webserver.

```
docker build -t bookstore-frontend:1.0 .
```

Once the image has built you can start up the container by running:

```
docker run --rm -it -p 8080:80 bookstore-frontend:1.0
```

Then you should be able to open up your browser and head to [http://localhost:8080/](http://localhost:8080/)

### (Optional) Running Locally

If you would like to run the application locally (without Docker) you'll need [Node and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#overview) installed. 

It also assumes that you have the backend REST API running locally on port 3000.

To run the application locally you can run:

```
npm install
```

Followed by:

```
npm start
```

## FAQ

#### When I run npm install it completes but shows vulernabilities, is this a problem?

Javascript packages can sometimes have vulnerabilities in them and if the versions (in the package.json) aren't updated then NPM highlights those vulnerabilities. For the purpose of this exercise you can ignore them, in production you would would to address them and update the versions.