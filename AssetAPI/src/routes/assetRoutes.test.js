const mongoose = require("mongoose");
const Create = require('../models/assetModel').Create;
const Asset = require('../database/assetDb');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('API ATDD Tests', () => {
    describe('Scenario: Upload Assets', () => {
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
    describe('Scenario: Get Assets', () => {
        before((done) => {
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
                            before((done) => {
                                Asset.remove({}, (err) => {
                                    done();
                                });
                                var assets = ['Votraw1,Moses,None,Blue,11/13/1964', 'Votraw2,Moses,None,Blue,11/13/1964', 'Votraw3,Moses,None,Blue,11/13/1964'];
                                assets.forEach((asset) => {
                                    var assetDb = new Asset(Create(asset));
                                    assetDb.save();
                                });
                            });
                            it('Should reterive only 1 assets in response with LastName: Votraw1', (done) => {
                                let req = {};
                                req.asset = { 'LastName': 'Votraw1' };
                                chai.request(server)
                                    .get('/Assets/GET')
                                    .query(req)
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
        before((done) => {
            Asset.remove({}, (err, obj) => {
                done();
            });
        });
        describe('Given ', () => {
            before(() => {
                Asset.insertMany(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'].map((i, index) => {
                    var asset = Create('Votraw1,Moses,None,Blue,11/13/1964');
                    asset.LastName = i;
                    const dob = new Date(asset.DateOfBirth);
                    asset.DateOfBirth = dob.getMonth() + '/' + (dob.getDay() + index) + '/' + dob.getFullYear();
                    return asset;
                }));
            });
            describe('We have 20 record in database', () => {
                describe('When count is reqwuestd', () => {
                    describe('then', () => {
                        it('should reterive 20 count', (done) => {
                            chai.request(server)
                                .get('/Assets/COUNT')
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('object');
                                    res.body.should.have.property('Count').eql(20);
                                    done();
                                });
                        });
                    });
                });
                describe('When sort on LastName is applied', () => {
                    describe('then', () => {
                        it('should reterive record sorted by lastname ascending', (done) => {
                            let req = {};
                            req.sort = { 'LastName': 1 }
                            chai.request(server)
                                .get('/Assets/GET')
                                .query(req)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('array');
                                    res.body.length.should.be.eql(20);
                                    res.body[0].should.have.property('LastName').eql('a');
                                    res.body[19].should.have.property('LastName').eql('y');
                                    done();
                                });
                        });
                    });
                    describe('And noPerPage of 5 is applied', () => {
                        describe('then', () => {
                            it('should reterive 5 record sorted by lastname ascending', (done) => {
                                let req = {};
                                req.sort = { 'LastName': 1 }
                                req.noPerPage = 5;
                                chai.request(server)
                                    .get('/Assets/GET')
                                    .query(req)
                                    .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('array');
                                        res.body.length.should.be.eql(5);
                                        res.body[0].should.have.property('LastName').eql('a');
                                        res.body[4].should.have.property('LastName').eql('g');
                                        done();
                                    });
                            });
                        });
                        describe('And pageNumber 1 is applied', () => {
                            describe('then', () => {
                                it('should reterive 5 record sorted by lastname ascending', (done) => {
                                    let req = {};
                                    req.sort = { 'LastName': 1 }
                                    req.noPerPage = 5;
                                    req.pageNumber = 1;
                                    chai.request(server)
                                        .get('/Assets/GET')
                                        .query(req)
                                        .end((err, res) => {
                                            res.should.have.status(200);
                                            res.body.should.be.a('array');
                                            res.body.length.should.be.eql(5);
                                            res.body[0].should.have.property('LastName').eql('a');
                                            res.body[4].should.have.property('LastName').eql('g');
                                            done();
                                        });
                                });
                            });
                        });
                        describe('And pageNumber 2 is applied', () => {
                            describe('then', () => {
                                it('should reterive 5 record sorted by lastname ascending', (done) => {
                                    let req = {};
                                    req.sort = { 'LastName': 1 }
                                    req.noPerPage = 5;
                                    req.pageNumber = 2;
                                    chai.request(server)
                                        .get('/Assets/GET')
                                        .query(req)
                                        .end((err, res) => {
                                            res.should.have.status(200);
                                            res.body.should.be.a('array');
                                            res.body.length.should.be.eql(5);
                                            res.body[0].should.have.property('LastName').eql('h');
                                            res.body[4].should.have.property('LastName').eql('l');
                                            done();
                                        });
                                });
                            });
                        });
                    });
                });
                describe('When sort by descending on LastName is applied', () => {
                    describe('then', () => {
                        it('should reterive record sorted by lastname desending', (done) => {
                            let req = {};
                            req = {};
                            req.sort = { 'LastName': -1 }
                            chai.request(server)
                                .get('/Assets/GET')
                                .query(req)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('array');
                                    res.body.length.should.be.eql(20);
                                    res.body[0].should.have.property('LastName').eql('y');
                                    res.body[19].should.have.property('LastName').eql('a');
                                    done();
                                });
                        });
                    });
                });
            });
        });
    });

    describe('Defects: ', ()=> {
        describe('Given', ()=> {
            describe('We get incorrect data from user to uploas', ()=> {
            describe('When', ()=> {
                describe('/POST is initiated', ()=>{
                    describe('then', ()=> {
                        it.only('should return error', ()=>{
                            let asset = {"data":["Rcccccccunyon|Yoshie|H|Cat|Red|10-15-1979", "Ruccnyon|Yoshie|H|Cat|Red|10-15-1979","Tkfkdkurja|Tenesha|C|Both|Green|2-3-1985","Evekjfkfklo|Dalila|G|None|Blue|6-3-1968"]}
                            chai.request(server)
                                .post('/Assets/POST')
                                .send(asset)
                                .end((err, res) => {
                                    console.log(res.body);
                                    res.should.have.status(200);
                                    res.body.should.have.length(3);
                                    done();
                                });
                        })
                    })
                })
            });
            })
        })
    })
});