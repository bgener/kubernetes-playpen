const express = require('express'),
    config = require('./config'),
    util = require('util'),
    mysql = require('mysql');

let app = express();

var connection = mysql.createConnection({
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password
});
connection.connect(err => {
    if (err) throw err;
    console.log(`Connected to mysql ${config.mysql.host}:${config.mysql.port} threadId ${connection.threadId}`);
});

app.get('/', async (request, response) => {
    try {
        console.log("Received request: " + JSON.stringify(request.url));

        const query = util.promisify(connection.query).bind(connection);

        const sql = "SELECT NOW() as 'ServerTime';";
        let results = await query(sql);

        const serverTime = results[0].ServerTime;
        console.log(`[x] The database server time is: ${serverTime}`);

        response.send(`Hello from NodeJs v1! ${serverTime}`);
    } catch (error) {
        console.log(`Error occurred ${error}`);
        response.send(`Error from NodeJs v1 ${error}`);
    }
});

var server = app.listen(9001);
console.log("app listening at http://%s:%s", server.address().address, server.address().port);