import {combineReducers} from 'redux';
import assets from './assetReducer';
import totalAssets from './totalAssetsReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  assets,
  totalAssets,
  ajaxCallInProgress
});

export default rootReducer;
