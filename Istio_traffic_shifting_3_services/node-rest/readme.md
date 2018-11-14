# Sample NodeJs service

Sample RESTful microservice in NodeJs

## Running the app in Docker

* Build docker image

```bash
cd .\node-rest
docker build -t playpen/node-rest .
```

* Run the docker container

```bash
docker run -p 9001:9001 -d playpen/node-rest
```

* Ensure the API endpoint is working fine

```bash
# Linux machine
curl localhost:9001

# Windows machine
curl -Uri http://localhost:9001 -UseBasicParsing
```

## Running the mysql in docker container

* Pull the image and run the container

```bash
docker pull mysql/mysql-server

docker run -d -p 3306:3306 --name playpen-mysql -e MYSQL_USER=guest -e MYSQL_PASSWORD=letmein mysql/mysql-server:latest
```

* Update the password and verify that everything works well

```bash
# Verify that mysql database has correct user and password
docker logs playpen-mysql
docker exec -it playpen-mysql bash
# run in bash 
mysql --host=localhost --user=guest --password=letmein

# Use mysql_native_password. caching_sha2_password is introduced in MySQL 8.0, but the Node.js version does not support it yet
ALTER USER guest IDENTIFIED WITH mysql_native_password BY 'letmein';
```

## Running on minikube

```bash
minikube start --memory=2048 --cpus=2 --vm-driver=hyperv hyperv-virtual-switch=minikube-switch

kubectl config use-context minikube

kubectl run node-rest --image=playpen/node-rest:latest --replicas=1
```