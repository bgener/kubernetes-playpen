var express = require('express');

var app = express();

app.get('/', (request, response) => {
    console.log("Received request: " + JSON.stringify(request.url));
    response.send('Hello from NodeJs v1');
});

var server = app.listen(9001);
console.log("app listening at http://%s:%s", server.address().address, server.address().port);