const Blog = require('../model/blog');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2');

const showAll = function (req, res) {
    Blog.find(function (err, blogs) {
        res.send(blogs);
    });
};

const allBlogs = function(req, res) {
    showAll(req, res);
};

const getBlogs = function(req, res) {
    showAll(req, res);
};

const postBlogs = function(req, res) {
    showAll(req, res);
};

const getId = function(req, res) {
    showAll(req, res);
};

const putId = function(req, res) {
    Blog.find({blogId: req.params.blogId}, function (err, blogs) {
        if(blogs.length === 0){
            let myBlog = new Blog({ blogId: req.params.blogId});
            myBlog.save();
        }
    });
    showAll(req, res);
};

const deleteId = function(req, res) {
    Blog.remove({blogId: req.params.blogId}, function (err) {});
    showAll(req, res);
};

module.exports = {allBlogs, getBlogs, postBlogs, getId, putId, deleteId};