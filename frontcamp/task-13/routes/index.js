const express = require('express');
const {allBlogs, getBlogs, postBlogs, getId, putId, deleteId} = require('../handlers/blog-handler');
const router = express.Router();

router.all('/', allBlogs);

router.get('/blogs', getBlogs);

router.post('/blogs', postBlogs);

router.get('/blogs/:blogId', getId);

router.put('/blogs/:blogId', putId);

router.delete('/blogs/:blogId', deleteId);

module.exports = router;