import  * as types from './actionTypes';
import assetApi from '../api/assetApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAssetsSuccess(assets) {
  return { type: types.LOAD_ASSETS_SUCCESS, assets };
}


export function loadAssets() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return assetApi.getAllAssets().then(assets => {
      dispatch(loadAssetsSuccess(assets));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}
