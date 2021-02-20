# DevOps Bookstore

A sample react app and accompanying Dockerfile for publishing the built app to NGINX


## Instructions

### Running Locally

The application assumes you have node and npm installed. 

It also assumes that you have the backend REST API running locally on port 3000.

To run the application locally you can run:

```
npm install
```

Followed by:

```
npm start
```

### Running in Docker

The application can be deployed as an NGINX Docker container.

In order to run in docker, firstly build the react app

```
npm run build
```

Then build the Docker image

```
docker build -t react-nginx:1.0 .
```

Once the image has built you can start up the container by running:

```
docker run --rm -it -p 8080:80 react-nginx:1.0
```

Then you should be able to open up your browser and head to [http://localhost:8080/](http://localhost:8080/)