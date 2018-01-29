const express = require('express');
const app = express();
const port = 8000;
const Handlebars = require('handlebars');
app.use(express.static('public'));

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
];

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
        if((data.filter(item => item['blogId'] !== req.params.blogId).length) === data.length){
            obj['blogId'] = req.params.blogId;
            data.push(obj);
            res.json(data);
        }
        else {
            res.json(data);
        }
    })
    .delete(function(req, res) {
        if((data.filter(item => item['blogId'] !== req.params.blogId).length) !== data.length){
            data = data.filter(obj => obj['blogId'] !== req.params.blogId);
            res.json(data);
        }
        else {
            res.json(data);
        }
    });

app.route('/*')
    .get(function(req, res) {
        const source = "<link href='https://fonts.googleapis.com/css?family=Rubik+Mono+One' rel='stylesheet'>" +
            "<link rel='stylesheet' href='./style.css'>" +
            "<p class='number'>404</p><h1>Page Not Found! Please try again</h1>" +
            "<img src='./ManShrug.png'>";
        const template = Handlebars.compile(source);
        res.send(template());

    });

app.listen(port, () => {
    console.log('We are live on ' + port);
});