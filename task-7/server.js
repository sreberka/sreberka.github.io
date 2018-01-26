const express = require('express');
const app = express();
const port = 8000;
let data = [
    {
        "blogId": "1",
        "author": "Mary L"
    },
    {
        "blogId": "2",
        "author": "Kate D"
    },
    {
        "blogId": "3",
        "author": "Sam H"
    }
]

app.all('/', function (req, res) {
    res.json(data);
});

app.route('/blogs')
    .get(function(req, res) {
        res.json(data);
    })
    .post(function(req, res) {
        res.json(data);
    });

app.route('/blogs/:blogId')
    .get(function(req, res) {
        res.json(data);
    })
    .put(function(req, res) {
        let obj = {};
        obj['blogId'] = req.params.blogId;
        data.push(obj);
        res.json(data);
    })
    .delete(function(req, res) {
        data = data.filter(obj => obj['blogId'] !== req.params.blogId);
        res.send(data);
    });

app.listen(port, () => {
    console.log('We are live on ' + port);
});