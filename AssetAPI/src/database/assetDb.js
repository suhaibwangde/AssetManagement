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

const Save = (assets, onSave, onExist, onError, onDone) => {
    if (assets && assets.length > 0) {
        assets.forEach((asset, i) => {
            Asset.findOne(asset, (err, exist) => {
                if (exist === null) {
                    const newAsset = new Asset(asset);
                    newAsset.save((err, savedAsset) => {
                        if (err)
                            onError(err, assets.length);
                        onSave(savedAsset,  assets.length);
                    });
                } else {
                    onExist(exist,  assets.length);
                }
                if (err) {
                    onError(err,  assets.length);
                } 
            });
        });
    }
}
module.exports = { Asset, Save };