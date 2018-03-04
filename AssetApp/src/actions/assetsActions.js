import * as types from './actionTypes';
import assetApi from '../api/assetApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

function loadAssetsSuccess(assets) {
  return { type: types.LOAD_ASSETS_SUCCESS, assets };
}

function uploadFileSuccess(data) {
  return { type: types.UPLOAD_ASSETS_SUCCESS, data };
}

function uploadFileSet(name) {
  return { type: types.UPLOAD_FILE_SET, name };
}

function getTotalAssets(count) {
  return { type: types.TOTAL_ASSETS, count }
}

export function loadAssets(asset, sort, pageNumber, noPerPage) {
  const query = {
    asset,
    sort,
    pageNumber,
    noPerPage
  }
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return assetApi.getAllAssets(query).then(assets => {
      dispatch(loadAssetsSuccess(assets));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}

export function getAssetsCount() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return assetApi.getTotalAssets().then(count => {
      dispatch(getTotalAssets(count));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}

export function setToUpload(name) {
  return function (dispatch) {
    dispatch(uploadFileSet(name));
  }
}

export function uploadAssets(data) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return assetApi.uploadAssets(data).then(file => {
      dispatch(uploadFileSuccess(file));
      dispatch(getAssetsCount());
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}
