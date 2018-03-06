const express = require('express');
const Create = require('../models/assetModel').Create;
const Compare = require('../models/assetModel').Compare;

const routes = (dB) => {
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
                        let result = {
                            uploaded: [],
                            exists: [],
                            errors: []
                        }
                        const onSave = (asset, length) => {
                            if (asset)
                                result.uploaded.push(asset);
                            const isDone = (result.exists.length + result.uploaded.length + result.errors.length) === length;
                            if (isDone) {
                                res.status(200).send(result);
                            }
                        }
                        const onExist = (asset, length) => {
                            if (asset)
                                result.exists.push(asset);
                            const isDone = (result.exists.length + result.uploaded.length + result.errors.length) === length;
                            if (isDone) {
                                res.status(200).send(result);
                            }
                        }
                        const onError = (asset, length) => {
                            if (asset)
                                result.errors.push(asset);
                            const isDone = (result.exists.length + result.uploaded.length + result.errors.length) === length;
                            if (isDone) {
                                res.status(200).send(result);
                            }
                        }
                        dB.Save(requestBody.data.filter((raw, pos) => {
                            return requestBody.data.indexOf(raw) === pos;
                        }).map(asset => Create(asset)), onSave, onExist, onError);

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
            try {
                dB.Asset.find({}, (err, assets) => {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        res.json(assets.length);
                    }
                });
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    assetRouter.route('/REMOVE')
        .get((req, res) => {
            try {
                dB.Asset.remove({}, (err, asset) => {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        res.json(asset);
                    }
                });
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    assetRouter.route('/GET')
        .get((req, res) => {
            const sort = req.query.sort;
            const asset = req.query.asset ? req.query.asset : {};
            const pageNumber = req.query.pageNumber ? parseInt(req.query.pageNumber) : null;
            const noPerPage = req.query.noPerPage ? parseInt(req.query.noPerPage) : null;
            if (req.query) {
                if (sort && noPerPage && pageNumber) {
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort).skip(pageNumber > 0 ? ((pageNumber - 1) * noPerPage) : 0).limit(noPerPage)
                } else if (!sort && noPerPage && pageNumber) {
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).skip(pageNumber > 0 ? ((pageNumber - 1) * noPerPage) : 0).limit(noPerPage)
                } else if (!sort && noPerPage && !pageNumber) {
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).limit(noPerPage)
                }
                else if (sort && noPerPage && !pageNumber) {
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort).limit(noPerPage)
                }
                else if (sort && !noPerPage && !pageNumber) {
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    }).sort(sort);
                }
                else {
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(assets);
                        }
                    });
                }
            } else {
                dB.Asset.find(asset, (err, assets) => {
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