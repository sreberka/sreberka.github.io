const express = require('express');
const app = express();
const port = 8000;
const json = require('./object.json');

app.all('/', function (req, res) {
    res.json(json);
});

app.route('/blogs')
    .get(function(req, res) {
        res.json(json);
    })
    .post(function(req, res) {
        res.json(json);
    });

app.route('/blogs/:userId')
    .get(function(req, res) {
        res.json(json);
    })
    .put(function(req, res) {
        res.send('Updated!!!');
    })
    .delete(function(req, res) {
        res.send('Deleted!!!');
    });

app.listen(port, () => {
    console.log('We are live on ' + port);
});