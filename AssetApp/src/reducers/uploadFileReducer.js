import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { fromJS } from 'immutable';
export default function uploadAssetsReducer(state = initialState.get('uploadedFile'), action) {
  switch (action.type) {
    case types.UPLOAD_FILE_SET:
      return fromJS(Object.assign({}, state.toJS ? state.toJS() : state, { "name": action.name }));
    case types.UPLOAD_ASSETS_SUCCESS:
      return fromJS(Object.assign({}, state.toJS ? state.toJS() : state, { "success": action.data }));
    default:
      return fromJS(state);
  }
}
