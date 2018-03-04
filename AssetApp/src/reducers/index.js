import {combineReducers} from 'redux';
import assets from './assetsReducer';
import assetCount from './assetCountReducer';
import ajaxCallInProgress from './ajaxStatusReducer';
import uploadedFile from './uploadFileReducer';
import query from './queryReducer';

const rootReducer = combineReducers({
  assets,
  uploadedFile,
  query,
  assetCount,
  ajaxCallInProgress
});

export default rootReducer;
