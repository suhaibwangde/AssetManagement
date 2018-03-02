import request from 'superagent';

const requestApi = 'http://localhost:3001/assets/';

const doo= () => {};

class AssetApi {
  static getAllAssets() {
    return new Promise( (resolve, reject) => {
      request
        .get(requestApi)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });

    });
  }
}
export default AssetApi;
