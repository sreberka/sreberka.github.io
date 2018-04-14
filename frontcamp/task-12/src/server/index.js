const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(__dirname + './../../'));

app.all('/*', function (req, res) {
    res.sendFile(path.join(__dirname + './../../index.html'));
});

app.listen(port);