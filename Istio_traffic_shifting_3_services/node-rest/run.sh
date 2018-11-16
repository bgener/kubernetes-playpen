# Create user-defined network
docker network create playpen-network


# Build and run a db
docker pull mysql/mysql-server
docker run -d -p 3306:3306 --name playpen-mysql --net=playpen-network -e MYSQL_USER=guest -e MYSQL_PASSWORD=letmein mysql/mysql-server:latest
# Use native_password mode
docker exec -it playpen-mysql bash -c "exec mysql --host=localhost --user=guest --password=letmein > ALTER USER guest IDENTIFIED WITH mysql_native_password BY 'letmein';"


# Build and run the app
docker build -t playpen/node-rest .
docker run -d --name playpen-node-rest --net=playpen-network -p 9001:9001 -e MYSQL_HOST=playpen-mysql playpen/node-rest:latest