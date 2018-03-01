var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var host = '27017';
var db = mongoose.connect('mongodb://localhost:'+ host + '/assets');
var Asset = require('./database/assetDb');
var app = express();

var port = process.env.PORT || 3001;


var assetRouter = require('./routes/assetRoutes')(Asset);

app.use('/Assets', assetRouter);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json('Asset API');
});

var server = app.listen(port, function () {
    console.log('server is up in running at \n http://localhost:' + server.address().port + '/Assets');

})

module.exports = server;
