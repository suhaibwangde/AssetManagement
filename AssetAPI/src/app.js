var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var host = '27017';
var db = mongoose.connect('mongodb://localhost:'+ host + '/assets');
var assetModel = require('./models/assetModel');
var app = express();

var port = process.env.PORT || 3001;


var assetRouter = require('./routes/assetRoutes')(assetModel.Asset);

app.use('/Assets', assetRouter);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json('Weloome to Question API');
});

var server = app.listen(port, function () {
    console.log('server is up in running at \n http://localhost:' + server.address().port + '/Assets');

})

module.exports = server;
