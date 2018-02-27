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

var Asset = mongoose.model("Asset", assetSchema);

var ProcessCommmaFile = function(data){
    if(data.includes(',')) {
        var values = data.split(',');
        var asset = {};
        fileOrder.COMMA_DELIMITED_FILE_ORDER.split(',').forEach(function(order, index){
            console.log(order, index)
            asset[order] = values[index];

        });
        console.log(aseet);
        return asset;
    }
    return {};
}

var ProcessSpaceFile = function(data){
    if(data.includes(' ')) {
        var values = data.split(' ');
        var asset = {};
        fileOrder.SPACE_DELIMITED_FILE_ORDER.split(' ').forEach(function(order, index){
            asset[order] = values[index];
        });
        return asset;
    }
    return {};
}

var ProcessPipeFile = function(data){
  if(data.includes('|')) {
        var values = data.split('|');
        var asset = {};
        fileOrder.SPACE_DELIMITED_FILE_ORDER.split('|').forEach(function(order, index){
            asset[order] = values[index];
        });
        return asset;
    }
    return {};
}

module.exports =  {Asset, ProcessCommmaFile};