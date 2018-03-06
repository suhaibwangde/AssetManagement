import  * as types from '../actions/actionTypes';
import initialState from './initialState';
import {fromJS} from 'Immutable';
export  default  function queryReducer(state = initialState.get('query'), action) {
  switch (action.type) {
    case types.UPDATE_QUERY:
    console.log(Object.assign({}, state.toJS ? state.toJS() : state,action.query));
      return fromJS(Object.assign({}, state.toJS ? state.toJS() : state,action.query));
    default:
      return fromJS(state);
  }
}
