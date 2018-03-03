import  * as types from '../actions/actionTypes';
import initialState from './initialState';
export  default  function assetReducer(state = initialState.get('assets'), action) {
  switch (action.type) {
    case types.LOAD_ASSETS_SUCCESS:
      return action.assets;
    default:
      return state;
  }
}
