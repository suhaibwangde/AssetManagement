import {combineReducers} from 'redux';
import assets from './assetReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  assets,
  ajaxCallInProgress
});

export default rootReducer;
