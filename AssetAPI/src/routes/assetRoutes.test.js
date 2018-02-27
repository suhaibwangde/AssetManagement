let mongoose = require("mongoose");
let Asset = require('../models/assetModel').Asset;

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Assets', () => {
    beforeEach((done) => {
        Asset.remove({}, (err) => { 
           done();         
        });     
    });
  /*
  * Test the /Get route
  */
  describe('/GET Assets', () => {
      it('it should GET all the assets', (done) => {
        chai.request(server)
            .get('/Assets/GET')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  /*
  * Test the /POST route
  */
  describe('/POST Assets', () => {
      it('it should POST comma delimited', (done) => {
        let asset = {};
        asset.data = ['Evelo|Dalila|G|None|Blue|6-3-1968'];
        chai.request(server)
            .post('/Assets/POST')
            .send(asset)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
  });
});