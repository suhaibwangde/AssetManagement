
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
   config = require('./config'),
   cors = require('cors');
// CONNECT TO MONGO DB
var db = mongoose.connect('mongodb://localhost:'+ config.HOST + '/assets');
// ASSET DATABASE
var Asset = require('./database/assetDb');
// EXPRESS INSTANCE
var app = express();

// ASSET API PORT
var port = process.env.PORT || config.PORT;

// ASSET API ROUTER
var assetRouter = require('./routes/assetRoutes')(Asset);
app.use(cors());
app.use('/Assets', assetRouter);
// ENCODE URL
app.use(bodyParser.urlencoded({extended: true}));

// JSON PARSER
app.use(bodyParser.json());

var server = app.listen(port, function () {
    console.log('server is up in running at \n http://localhost:' + server.address().port + '/Assets');
})

module.exports = server;
