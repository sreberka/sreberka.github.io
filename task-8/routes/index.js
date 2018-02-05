const express = require('express');
const logger = require("../utils/logger");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2');

const router = express.Router();

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    const blogSchema = mongoose.Schema({
        blogId: String,
        logIn: String,
        password: String
    });

    const Blog = mongoose.model('Blog', blogSchema);

    const showAll = function (req, res) {
        Blog.find(function (err, blogs) {
            res.send(blogs);
        });
    };

    router.all('/', function(req, res) {
        showAll(req, res);
    });

    router.get('/blogs', function(req, res) {
        showAll(req, res);
        logger.info(req.headers.host + req.url);
    });

    router.post('/blogs', function(req, res) {
        showAll(req, res);
        logger.info(req.headers.host + req.url);
    });

    router.get('/blogs/:blogId', function(req, res) {
        showAll(req, res);
        logger.info(req.headers.host + req.url);
    });

    router.put('/blogs/:blogId', function(req, res) {
        Blog.find({blogId: req.params.blogId}, function (err, blogs) {
            if(blogs.length === 0){
                let myBlog = new Blog({ blogId: req.params.blogId});
                myBlog.save();
            }
        });
        showAll(req, res);
    });

    router.delete('/blogs/:blogId', function(req, res) {
        Blog.remove({blogId: req.params.blogId}, function (err) {});
        showAll(req, res);
    });
});

module.exports = router;