const express = require('express');
const Create = require('../models/assetModel').Create;
const Compare = require('../models/assetModel').Compare;

const routes = (Asset) => {
    var assetRouter = express.Router();
    assetRouter.route('/POST')
        .post(function (req, res) {
            var body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                try {
                    var requestBody = JSON.parse(Buffer.concat(body).toString());
                    if (requestBody && requestBody.data && requestBody.data.length > 0) {
                        requestBody.data.filter((raw, pos)=> {
                         return requestBody.data.indexOf(raw) === pos;
                        }).forEach((asset) => {
                            Asset.find(Create(asset),(err, exist) =>{
                                if(!!exist){
                                 const newAsset = new Asset(Create(asset));
                                 newAsset.save((err) => {
                                     if(err)
                                        throw(err);
                                 });
                                }
                                if(err)
                                    throw(err);
                            });
                        })
                        res.status(200).send({success: true});
                    } else {
                        res.status(400).send('Please upload valid assets');
                    }
                } catch (err) {
                    res.status(400).send(err);
                }
            });
        });
    assetRouter.route('/COUNT')
        .get((req, res) => {
            try{
            Asset.find({}, (err, assets) => {
                if(err){
                    res.status(400).send(err);
                } else {
                res.json(assets.length);
                }
            });
        }
        catch(err){
            res.status(400).send(err);
        }
    });
    assetRouter.route('/REMOVE')
        .get((req, res) => {
            try{
            Asset.remove({}, (err, asset) => {
                if(err){
                    res.status(400).send(err);
                } else {
                res.json(asset);
                }
            });
        }
        catch(err){
            res.status(400).send(err);
        }
        });
    assetRouter.route('/GET')
        .get((req, res) => {
            console.log(req);
            const sort = req.query.sort;
            const asset = req.query.asset ? req.query.asset : {};
            const pageNumber = req.query.pageNumber ? parseInt(req.query.pageNumber) : null;
            const noPerPage = req.query.noPerPage ? parseInt(req.query.noPerPage) : null;
            if (req.query) {
                if (sort && noPerPage && pageNumber) {
                    Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort).skip(pageNumber > 0 ? ((pageNumber - 1) * noPerPage) : 0).limit(noPerPage)
                } else if (!sort && noPerPage && pageNumber) {
                    Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).skip(pageNumber > 0 ? ((pageNumber - 1) * noPerPage) : 0).limit(noPerPage)
                } else if (!sort && noPerPage && !pageNumber) {
                    Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).limit(noPerPage)
                }
                else if (sort && noPerPage && !pageNumber) {
                    Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort).limit(noPerPage)
                }
                else if (sort && !noPerPage && !pageNumber) {
                    Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort);
                }
                else {
                    Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    });
                }
            } else {
                Asset.find(asset, (err, assets) => {
                    if (err) {
                        res.status(500).senld(err);
                    } else {
                        res.json(assets);
                    }
                });
            }

        });

    return assetRouter;
};

module.exports = routes;