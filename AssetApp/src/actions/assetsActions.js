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

export function updateQuery(query) {
  return { type: types.UPDATE_QUERY, query }
} 

export function setActivePage(pageNumber) {
  return { type: types.SET_ACTIVE_PAGE, pageNumber }
} 

export function loadAssets(query) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    dispatch(updateQuery(query));
    dispatch(setActivePage(query.pageNumber));
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

export function uploadAssets(name, data) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    dispatch(uploadFileSet(name));
    return assetApi.uploadAssets(data).then(file => {
      dispatch(uploadFileSuccess(file));
      dispatch(getAssetsCount());
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
}
