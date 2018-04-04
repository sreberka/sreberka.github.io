const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    blogId: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;