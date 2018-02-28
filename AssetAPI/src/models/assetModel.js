var mongoose = require('mongoose');
var fileOrder = require('./fileOrder');

var  assetSchema =  mongoose.Schema({
    LastName: String,
    FirstName: String,
    MiddleInitial: String,
    Pet: String,
    FavoriteColor: String,
    DateOfBirth: Date
});

const Asset = mongoose.model("Asset", assetSchema);

var Create = function(data) {
    let asset = {};
    let order = [];
    let values = [];
    if(data.includes(',')) {
        values = data.split(',');
        order = fileOrder.COMMA_DELIMITED_FILE_ORDER.split(',');
    }  else if(data.includes(' ')) {
        values = data.split(' ');
        order = fileOrder.SPACE_DELIMITED_FILE_ORDER.split(' ');
    } else  if(data.includes('|')) {
        values = data.split('|');
        order = fileOrder.PIPE_DELIMITED_FILE_ORDER.split('|');
    }
    order.forEach(function(property, index){
        asset[property] = values[index] ? values[index] : '';
    });
    return asset;
}

module.exports =  {Asset, Create};