var mongoose = require('mongoose')

var assetSchema = mongoose.Schema({
  LastName: String,
  FirstName: String,
  MiddleInitial: String,
  Pet: String,
  FavoriteColor: String,
  DateOfBirth: Date
})

// Asset Model from schema
const Asset = mongoose.model('Asset', assetSchema)

// Save Asset
const Save = (assets, onSave, onExist, onError, onDone) => {
  // Check for Assets and its length
  if (assets && assets.length > 0) {
    // loop over all assets
    assets.forEach((asset, i) => {
      // Check if asset exists
      Asset.findOne(asset, (err, exist) => {
        // if not exists
        if (exist === null) {
          // Create Asset
          const newAsset = new Asset(asset)
          // Save Asst
          newAsset.save((err, savedAsset) => {
            // Check if err while saving asset
            if (err) {
              // log error
              onError(err, assets.length)
            }
            // Mark asset as uploaded
            onSave(savedAsset, assets.length)
          })
        } else {
          // Mark asset as exsiting
          onExist(exist, assets.length)
        }
        // log error
        if (err) {
          onError(err, assets.length)
        }
      })
    })
  }
}

// Export Asset & Save
module.exports = { Asset, Save }
