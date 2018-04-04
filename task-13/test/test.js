const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const Blog = require('../model/blog');

chai.use(chaiHttp);

describe('Blog', function() {
    it('should list ALL data on /blogs GET', function(done) {
        chai.request(server)
            .get('/blogs')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            });
    });

    it('should add a SINGLE blob on /blogs POST', function () {
        let newPost = {
            'blogId': 122212121
        };
        chai.request(server)
            .post('/posts')
            .send(newPost)
            .end(function(err, res){
                res.should.have.status(200);
                res.text.should.equal('post');
                done();
            });
    });

    it('should list a SINGLE blog on /blogs/:blogId GET', function () {
        chai.request(server)
            .get('/blogs/2')
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('blogId');
                done();
            });
    });

    it('should update a SINGLE blog on /blogs/:blogId PUT', function () {
        let testBlog = new Blog({
            'content': 'test content',
            'blogId': 1111111111
        });
        testBlog.save();
        chai.request(server)
            .put('/posts/' + testBlog.blogId)
            .send({'content': 'updated test content'})
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.blog.content.should.eql('updated test content');
                done();
            });

    });

    it('should delete a SINGLE blog on /blogs/:blogId DELETE', function () {
        let testBlog = new Blog({
            'blogId': 4444444
        });
        testBlog.save();
        chai.request(server)
            .delete('/posts/' + testBlog.blogId)
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('delete ' + testBlog.blogId);
                done();
            });
    });
});