import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { fromJS } from 'Immutable';
export default function assetsReducer(state = initialState.get('assets'), action) {
  switch (action.type) {
    case types.LOAD_ASSETS_SUCCESS:
      return fromJS(action.assets);
    default:
      return fromJS(state);
  }
}
