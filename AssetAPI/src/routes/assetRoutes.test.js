const mongoose = require("mongoose");
const Create = require('../models/assetModel').Create;
const Asset = require('../database/assetDb');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe.only('Scenario: Upload Assets', () => {
    beforeEach((done) => {
        Asset.remove({}, (err) => {
            done();
        });
    });
    describe('Given', () => {
        describe('we have comma delimited properties in  array', () => {
            describe('When /POST is initiated', () => {
                describe('then', () => {
                    it('it should POST comma delimited', (done) => {
                        let asset = { 'data': ['Votraw,Moses,None,Blue,11/13/1964'] };
                        chai.request(server)
                            .post('/Assets/POST')
                            .send(asset)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('array');
                                res.body[0].should.have.property('LastName');
                                res.body[0].should.have.property('LastName').eql('Votraw');
                                res.body[0].should.have.property('FirstName');
                                res.body[0].should.have.property('FirstName').eql('Moses');
                                res.body[0].should.have.property('Pet');
                                res.body[0].should.have.property('Pet').eql('None');
                                res.body[0].should.have.property('DateOfBirth');
                                res.body[0].should.have.property('DateOfBirth').eql(new Date('11/13/1964').toISOString());
                                res.body[0].should.not.have.property('MiddleInitial');
                                res.body[0].should.have.property('FavoriteColor');
                                res.body[0].should.have.property('FavoriteColor').eql('Blue');
                                done();
                            });
                    });
                });
            });
            describe('And some properties are empty', () => {
                describe('When /POST is initiated', () => {
                    describe('then', () => {
                        it('it should POST comma delimited', (done) => {
                            let asset = { 'data': ['Votraw3,,None,,11/13/1964'] };
                            chai.request(server)
                                .post('/Assets/POST')
                                .send(asset)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('array');
                                    res.body[0].should.have.property('LastName');
                                    res.body[0].should.have.property('LastName').eql('Votraw3');
                                    res.body[0].should.have.property('FirstName');
                                    res.body[0].should.have.property('FirstName').eql('');
                                    res.body[0].should.have.property('Pet');
                                    res.body[0].should.have.property('Pet').eql('None');
                                    res.body[0].should.have.property('DateOfBirth');
                                    res.body[0].should.have.property('DateOfBirth').eql(new Date('11/13/1964').toISOString());
                                    res.body[0].should.not.have.property('MiddleInitial');
                                    res.body[0].should.have.property('FavoriteColor');
                                    res.body[0].should.have.property('FavoriteColor').eql('');
                                    done();
                                });
                        });
                    });
                });
            });
        });
        describe('we have pipe delimited data array', () => {
            describe('When /POST is initiated', () => {
                describe('then', () => {
                    it('it should POST pipe delimited', (done) => {
                        let asset = { 'data': ['Evelo|Dalila|G|None|Blue|6-3-1968'] };
                        chai.request(server)
                            .post('/Assets/POST')
                            .send(asset)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('array');
                                res.body[0].should.have.property('LastName');
                                res.body[0].should.have.property('LastName').eql('Evelo');
                                res.body[0].should.have.property('FirstName');
                                res.body[0].should.have.property('FirstName').eql('Dalila');
                                res.body[0].should.have.property('Pet');
                                res.body[0].should.have.property('Pet').eql('None');
                                res.body[0].should.have.property('DateOfBirth');
                                res.body[0].should.have.property('DateOfBirth').eql(new Date('6-3-1968').toISOString());
                                res.body[0].should.have.property('MiddleInitial');
                                res.body[0].should.have.property('MiddleInitial').eql('G');
                                res.body[0].should.have.property('FavoriteColor');
                                res.body[0].should.have.property('FavoriteColor').eql('Blue');
                                done();
                            });
                    });
                });
            })
        });
        describe('we have space delimited data array', () => {
            describe('When /POST is initiated', () => {
                describe('then', () => {
                    it('it should POST space delimited', (done) => {
                        let asset = { 'data': ['Venessa Mearse U D 3-3-1992 Black'] };
                        chai.request(server)
                            .post('/Assets/POST')
                            .send(asset)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('array');
                                res.body[0].should.have.property('LastName');
                                res.body[0].should.have.property('LastName').eql('Venessa');
                                res.body[0].should.have.property('FirstName');
                                res.body[0].should.have.property('FirstName').eql('Mearse');
                                res.body[0].should.have.property('Pet');
                                res.body[0].should.have.property('Pet').eql('D');
                                res.body[0].should.have.property('DateOfBirth');
                                res.body[0].should.have.property('DateOfBirth').eql(new Date('3-3-1992').toISOString());
                                res.body[0].should.have.property('MiddleInitial');
                                res.body[0].should.have.property('MiddleInitial').eql('U');
                                res.body[0].should.have.property('FavoriteColor');
                                res.body[0].should.have.property('FavoriteColor').eql('Black');
                                done();
                            });
                    });
                });
            })
        });

        describe('we have duplicated comma delimited data array', () => {
            describe('When /POST is initiated', () => {
                describe('then', () => {
                    it('it should POST only one comma delimited', (done) => {
                        let asset = { 'data': ['Votraw1,Moses,None,Blue,11/13/1964', 'Votraw1,Moses,None,Blue,11/13/1964'] };
                        chai.request(server)
                            .post('/Assets/POST')
                            .send(asset)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('array');
                                res.body.length.should.be.eql(1);
                                done();
                            });
                    });
                });
            })
        });
        describe('we have empty array', () => {
            describe('When /POST is initiated', () => {
                describe('then', () => {
                    it('it should send message', (done) => {
                        let asset = { 'data': [] };
                        chai.request(server)
                            .post('/Assets/POST')
                            .send(asset)
                            .end((err, res) => {
                                res.should.have.status(400);
                                res.body.should.eql({});
                                res.text.should.be.eql('Please upload valid assets');
                                done();
                            });
                    });
                });
            })
        });
        describe('we have null data in array', () => {
            describe('When /POST is initiated', () => {
                describe('then', () => {
                    it('it should send message', (done) => {
                        let asset = { 'data': null };
                        chai.request(server)
                            .post('/Assets/POST')
                            .send(asset)
                            .end((err, res) => {
                                res.should.have.status(400);
                                res.body.should.eql({});
                                res.text.should.be.eql('Please upload valid assets');
                                done();
                            });
                    });
                });
            })
        });
        describe('we have empty request body', () => {
            describe('When /POST is initiated', () => {
                describe('then', () => {
                    it('it should send message', (done) => {
                        let asset = {};
                        chai.request(server)
                            .post('/Assets/POST')
                            .send(asset)
                            .end((err, res) => {
                                res.should.have.status(400);
                                res.body.should.eql({});
                                res.text.should.be.eql('Please upload valid assets');
                                done();
                            });
                    });
                });
            })
        });
    });
});
describe.only('Scenario: Get Assets', () => {
    beforeEach((done) => {
        Asset.remove({}, (err) => {
            done();
        });
    });
    describe('Given', () => {
        describe('Database is ready', () => {
            describe('When /GET is initiated', () => {
                describe('then', () => {
                    it('Should reterive zero assets in response with 200', (done) => {
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
            });
            describe('and database have 2 asset', () => {
                describe('When /GET is initiated', () => {
                    describe('then', () => {
                        before(() => {
                            var assets = ['Votraw1,Moses,None,Blue,11/13/1964', 'Votraw2,Moses,None,Blue,11/13/1964'];
                            assets.forEach((asset) => {
                                var assetDb = new Asset(Create(asset));
                                assetDb.save();
                            });
                        });
                        it('Should reterive 2 assets in response with 200', () => {
                            chai.request(server)
                                .get('/Assets/GET')
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('array');
                                    res.body.length.should.be.eql(2);
                                    done();
                                });
                        });
                    });
                });
            });
             describe('And database have assets wih lastNmae Votraw1, Votraw2, Votraw3', () => {
                describe('When /GET is initiated with LastName: Votraw2', () => {
                    describe('then', () => {
                        before(() => {
                            var assets = ['Votraw1,Moses,None,Blue,11/13/1964', 'Votraw2,Moses,None,Blue,11/13/1964', 'Votraw3,Moses,None,Blue,11/13/1964'];
                            assets.forEach((asset) => {
                                var assetDb = new Asset(Create(asset));
                                assetDb.save();
                            });
                            done();
                        });
                        it.only('Should reterive only 1 assets in response with LastName: Votraw1', (done) => {
                            const req = {};
                            req.query = {'LastName': 'Votraw1'};
                            chai.request(server)
                                .get('/Assets/GET')
                                .send(req)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('array');
                                    res.body.length.should.be.eql(1);
                                    res.body[0].should.have.property('LastName').eql('Votraw1');
                                    done();
                                });
                        });
                    });
                });
            });
        });
    });


});
describe('Scenario: Sort Assets', () => {

});