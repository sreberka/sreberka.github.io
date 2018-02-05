const express = require('express');
const app = express();
const port = 8000;
const exphbs  = require('express-handlebars');
app.set('view engine', 'handlebars');
const logger = require("./utils/logger");
app.use(express.static('public'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
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
            Blog.find({blogId: req.params.blogId}, function (err, blogs) {
                if(blogs.length === 0){
                    let myBlog = new Blog({ blogId: req.params.blogId});
                    myBlog.save();
                }
            });
            showAll(req, res);
        })
        .delete(function(req, res) {
            Blog.remove({blogId: req.params.blogId}, function (err) {});
            showAll(req, res);
        });

    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.route('/*')
        .get(function(req, res) {
            res.render('home');
        });
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});