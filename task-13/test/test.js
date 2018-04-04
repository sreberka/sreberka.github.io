const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

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

    it('should add a SINGLE blob on /blogs POST');
    it('should list a SINGLE blog on /blogs/:blogId GET');
    it('should update a SINGLE blog on /blogs/:blogId PUT');
    it('should delete a SINGLE blog on /blogs/:blogId DELETE');
});