import  * as types from '../actions/actionTypes';
import initialState from './initialState';
import {fromJS} from 'Immutable';
export  default  function activePageReducer(state = initialState.get('activePage'), action) {
  switch (action.type) {
    case types.SET_ACTIVE_PAGE:
      return fromJS(action.pageNumber);
    default:
      return fromJS(state);
  }
}
