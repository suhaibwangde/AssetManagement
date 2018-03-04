import request from 'superagent';

const requestApi = 'http://localhost:3001/Assets/';

const doo= () => {};

class AssetApi {
  static getAllAssets(query) {
    return new Promise( (resolve, reject) => {
      request
        .get(requestApi+'GET')
        .query(query)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });

    });
  }

    static getTotalAssets() {
    return new Promise( (resolve, reject) => {
      request
        .get(requestApi+'COUNT')
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });

    });
  }
    static uploadAssets(data) {
    return new Promise((resolve, reject) => {
      if (data) {
        request
          .post(requestApi+'POST')
          .send({data: data})
          .end(function (err, res) {
            if(res){
             if(res.status === 200){
              resolve(res.body);
            } else {
              reject(res.text);
            }} else if(err){
              reject(err);
            } else {
              reject('Unknown error');
            }
          });
      } else {
        reject('No asset to upload');
      }
    });
  }
}
export default AssetApi;
