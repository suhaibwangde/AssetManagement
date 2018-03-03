import  * as types from '../actions/actionTypes';
import initialState from './initialState';
export  default  function totalAssetReducer(state = initialState.get('totalAssets'), action) {
  switch (action.type) {
    case types.TOTAL_ASSETS:
      return action.totalAssets;
    default:
      return state;
  }
}
