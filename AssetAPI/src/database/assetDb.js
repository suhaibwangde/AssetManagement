var mongoose = require('mongoose');

var assetSchema = mongoose.Schema({
    LastName: String,
    FirstName: String,
    MiddleInitial: String,
    Pet: String,
    FavoriteColor: String,
    DateOfBirth: Date
});

const Asset = mongoose.model("Asset", assetSchema);
module.exports = Asset;