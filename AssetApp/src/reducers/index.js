import {combineReducers} from 'redux';
import assets from './assetsReducer';
import assetCount from './assetCountReducer';
import ajaxCallInProgress from './ajaxStatusReducer';
import uploadedFile from './uploadFileReducer';

const rootReducer = combineReducers({
  assets,
  uploadedFile,
  assetCount,
  ajaxCallInProgress
});

export default rootReducer;
