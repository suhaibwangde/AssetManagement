const express = require('express');
const Create = require('../models/assetModel').Create;
const Compare = require('../models/assetModel').Compare;

const routes = function (Asset) {
    var assetRouter = express.Router();
    assetRouter.route('/POST')
        .post(function (req, res) {
            var body = [];
            req.on('data', function (chunk) {
                body.push(chunk);
            }).on('end', function () {
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
                                        asset.save(asset);
                                    }
                                }
                            });
                        }
                    });
                    res.status(200).send(assets);
                } else {
                    console.log('check');
                    res.status(400).send('Please upload valid assets');
                }
            });

        });

    assetRouter.route('/GET')
        .get(function (req, res) {
            Asset.find(req.query, function (err, assets) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(assets);
                }
            });
        });

    return assetRouter;
};

module.exports = routes;