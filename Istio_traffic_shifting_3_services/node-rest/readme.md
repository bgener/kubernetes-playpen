# Sample NodeJs service

Sample RESTful microservice in NodeJs

## Running in Docker

* Build docker image

```bash
cd .\node-rest
docker build -t bgener/node-rest .
```

* Run the docker container

```bash
docker run -p 9001:9001 -d bgener/node-rest
```

* Ensure the API endpoint is working fine

```bash
# Linux machine
curl localhost:9001

# Windows machine
curl -Uri http://localhost:9001
```

## Running on minikube

```bash
minikube start --memory=2048 --cpus=2 --vm-driver=hyperv hyperv-virtual-switch=minikube-switch

kubectl config use-context minikube

kubectl run node-rest --image=bgener/node-rest:latest --replicas=1
```