const express = require('express');
const Create = require('../models/assetModel').Create;
const Compare = require('../models/assetModel').Compare;

// Routes for Asset API
const routes = (dB) => {
    // Initiate router
    const assetRouter = express.Router();
    // POST ROUTE
    assetRouter.route('/POST')
        .post(function (req, res) {
            // Initialize body
            let body = [];
            req.on('data', (chunk) => {
                // push chunk into body
                body.push(chunk);
            }).on('end', () => {
                try {
                    // process body to json
                    const requestBody = JSON.parse(Buffer.concat(body).toString());
                    // Verify body
                    if (requestBody && requestBody.data && requestBody.data.length > 0) {
                        // Create result object
                        let result = {
                            uploaded: [],
                            exists: [],
                            errors: []
                        }
                        // on Save callback
                        const onSave = (asset, length) => {
                            // if valid asset save to uploaded
                            if (asset)
                                result.uploaded.push(asset);
                            // Check if is done
                            const isDone = (result.exists.length + result.uploaded.length + result.errors.length) === length;
                            if (isDone) {
                                // Send response with result
                                res.status(200).send(result);
                            }
                        }

                        // on Exist callback
                        const onExist = (asset, length) => {
                            if (asset)
                                result.exists.push(asset);
                            // Check if is done
                            const isDone = (result.exists.length + result.uploaded.length + result.errors.length) === length;
                            if (isDone) {
                                // Send response with result
                                res.status(200).send(result);
                            }
                        }

                        // onError call back
                        const onError = (asset, length) => {
                            if (asset)
                                result.errors.push(asset);
                            // Check if is done
                            const isDone = (result.exists.length + result.uploaded.length + result.errors.length) === length;
                            if (isDone) {
                                // Send response with result
                                res.status(200).send(result);
                            }
                        }
                        // Dedupe data & then save it
                        dB.Save(requestBody.data.filter((raw, pos) => {
                            return requestBody.data.indexOf(raw) === pos;
                        }).map(asset => Create(asset)), onSave, onExist, onError);
                    } else {
                        // Error for empty or invalid assets
                        res.status(400).send('Please upload valid assets');
                    }
                } catch (err) {
                    // Error catch while processing
                    res.status(500).send(err);
                }
            });
        });
    // COUNT ROUTE
    assetRouter.route('/COUNT')
        .get((req, res) => {
            try {
                // Get no of assets
                dB.Asset.find({}, (err, assets) => {
                    // if error
                    if (err) {
                        // Send error as 500
                        res.status(500).send(err);
                    } else {
                        // Send length to server
                        res.json(assets.length);
                    }
                });
            }
            catch (err) {
                // Send eror as 500
                res.status(500).send(err);
            }
        });
    // REMOVE ROUTE
    assetRouter.route('/REMOVE')
        .get((req, res) => {
            try {
                // Remove asset
                const asset = req.query.asset ? req.query.asset : {};
                // Remove specifc or all 
                dB.Asset.remove(asset, (err, asset) => {
                    // if errpr
                    if (err) {
                        // send error to respnse
                        res.status(500).send(err);
                    } else {
                        // Send deleted as response
                        res.json(asset);
                    }
                });
            }
            catch (err) {
                // Send error as 500
                res.status(500).send(err);
            }
        });
    // GET ROUTE
    assetRouter.route('/GET')
        .get((req, res) => {
            // Sort Query
            const sort = req.query.sort;
            // Asset Query
            const asset = req.query.asset ? req.query.asset : {};
            // PageNumber Query
            const pageNumber = req.query.pageNumber ? parseInt(req.query.pageNumber) : null;
            // No of Pages
            const noPerPage = req.query.noPerPage ? parseInt(req.query.noPerPage) : null;
            // If we have query
            if (req.query) {
                // if we have sort && noPerPage && pagenumber
                if (sort && noPerPage && pageNumber) {
                    // Find assets apply sort, skip pagenumber and apply limit
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            // send error as 500
                            res.status(500).send(err);
                        } else {
                            // send assets response as json
                            res.json(assets);
                        }
                    }).sort(sort).skip(pageNumber > 0 ? ((pageNumber - 1) * noPerPage) : 0).limit(noPerPage)
                } else if (!sort && noPerPage && pageNumber) { // No sort page & page number
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            // send error as 500
                            res.status(500).send(err);
                        } else {
                            // send assets response as json
                            res.json(assets);
                        }
                    }).skip(pageNumber > 0 ? ((pageNumber - 1) * noPerPage) : 0).limit(noPerPage)
                } else if (!sort && noPerPage && !pageNumber) {// Apply only limit to page
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            // send error as 500
                            res.status(500).send(err);
                        } else {
                            // send assets response as json
                            res.json(assets);
                        }
                    }).limit(noPerPage)
                }
                else if (sort && noPerPage && !pageNumber) { // Apply sort & limit
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            // send error as 500
                            res.status(500).send(err);
                        } else {
                            // send assets response as json
                            res.json(assets);
                        }
                    }).sort(sort).limit(noPerPage)
                }
                else if (sort && !noPerPage && !pageNumber) { // Apply only sort
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            // send error as 500
                            res.status(500).send(err);
                        } else {
                            // send assets response as json
                            res.json(assets);
                        }
                    }).sort(sort);
                }
                else {
                    dB.Asset.find(asset, (err, assets) => {
                        if (err) {
                            // send error as 500
                            res.status(500).send(err);
                        } else {
                            // send assets response as json
                            res.json(assets);
                        }
                    });
                }
            } else {
                dB.Asset.find(asset, (err, assets) => { // Apply no sort no page no pagenumber 
                    if (err) {
                        // send error as 500
                        res.status(500).send(err);
                    } else {
                        // send assets response as json
                        res.json(assets);
                    }
                });
            }

        });

    return assetRouter;
};

module.exports = routes;