# Sample NodeJs service

Sample RESTful microservice in NodeJs

## Running in Docker

* Build docker image

```bash
docker build -t bgener/node-rest .
```

* Run the docker container

```bash
docker run -p 9001:9001 -d bgener/node-rest
```