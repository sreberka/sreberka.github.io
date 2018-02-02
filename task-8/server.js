const express = require('express');
const app = express();
const port = 8000;
const Handlebars = require('handlebars');
const logger = require("./utils/logger");
app.use(express.static('public'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2');

const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// });

const blogSchema = mongoose.Schema({
    blogId: String
});

const Blog = mongoose.model('Blog', blogSchema);

const showAll = function (req, res) {
    Blog.find(function (err, blogs) {
        res.send(blogs);
    });
};

app.all('/', function (req, res) {
    showAll(req, res);
});

app.route('/blogs')
    .get(function(req, res) {
        showAll(req, res);
        logger.info(req.headers.host + req.url);
    })
    .post(function(req, res) {
        showAll(req, res);
    });


app.route('/blogs/:blogId')
    .get(function(req, res) {
        showAll(req, res);
        logger.info(req.headers.host + req.url);
    })
    .put(function(req, res) {
        const myBlog = new Blog({ blogId: req.params.blogId});
        myBlog.save();
        showAll(req, res);
    })
    .delete(function(req, res) {
        Blog.deleteMany({blogId: req.params.blogId}, function (err) {});
        showAll(req, res);
    });

// app.route('/*')
//     .get(function(req, res) {
//         const source = "<link href='https://fonts.googleapis.com/css?family=Rubik+Mono+One' rel='stylesheet'>" +
//             "<link rel='stylesheet' href='./style.css'>" +
//             "<p class='number'>404</p><h1>Page Not Found! Please try again</h1>" +
//             "<img src='./ManShrug.png'>";
//         const template = Handlebars.compile(source);
//         res.send(template());
//         logger.info(req.headers.host + req.url);
//     });

app.listen(port, () => {
    console.log('We are live on ' + port);
});