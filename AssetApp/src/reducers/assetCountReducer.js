import  * as types from '../actions/actionTypes';
import initialState from './initialState';
import {fromJS} from 'Immutable';
export  default  function assetCountReducer(state = initialState.get('assetCount'), action) {
  switch (action.type) {
    case types.TOTAL_ASSETS:
      return fromJS(action.count);
    default:
      return fromJS(state);
  }
}
