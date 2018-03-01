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
                var requestBody = JSON.parse(Buffer.concat(body).toString());
                if (requestBody && requestBody.data && requestBody.data.length > 0) {
                    let assets = [];
                    requestBody.data.forEach((raw) => {
                        let asset = new Asset(Create(raw));
                        if (asset) {
                            if (assets.findIndex((other) => !Compare(asset, other)) === -1)
                                assets.push(asset);
                            Asset.find(asset, (err, exists) => {
                                if (exists.length == 0) {
                                    if (err) {
                                        res.status(400).send(err);
                                    } else {
                                        asset.save((error) => {
                                            res.status(400).send(err);
                                        });
                                    }
                                }
                            });
                        }
                    });
                    res.status(200).send(assets);
                } else {
                    res.status(400).send('Please upload valid assets');
                }
            });

        });
    assetRouter.route('/COUNT')
        .get((req, res) => {
            Asset.find({}, (err,assets) => {
            const Count = {'Count':  assets.length}
                 res.json(Count);
            });
          
         })
    assetRouter.route('/GET')
        .get((req, res) => {
            const sort = req.query.sort;
            const asset = req.query.asset ? req.query.asset : {};
            const pageNumber = req.query.pageNumber ? parseInt(req.query.pageNumber) : null;
            const noPerPage = req.query.noPerPage ? parseInt(req.query.noPerPage) : null;
            if (req.query) {
                if (sort && noPerPage && pageNumber) {
                    Asset.find(req.query.asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort).skip(pageNumber > 0 ? ((pageNumber - 1) * noPerPage) : 0).limit(noPerPage)
                } else if (!sort && noPerPage && pageNumber) {
                    Asset.find(req.query.asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).skip(pageNumber > 0 ? ((pageNumber - 1) * noPerPage) : 0).limit(noPerPage)
                } else if (!sort && noPerPage && !pageNumber) {
                    Asset.find(req.query.asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).limit(noPerPage)
                }
                else if (sort && noPerPage && !pageNumber) {
                    Asset.find(req.query.asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort).limit(noPerPage)
                }
                else if (sort && !noPerPage && !pageNumber) {
                    Asset.find(req.query.asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort);
                }
                else {
                    Asset.find(req.query.asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    });
                }
            } else {
                Asset.find({}, (err, assets) => {
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