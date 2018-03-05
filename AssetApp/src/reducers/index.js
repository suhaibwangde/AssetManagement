import {combineReducers} from 'redux';
import assets from './assetsReducer';
import assetCount from './assetCountReducer';
import ajaxCallInProgress from './ajaxStatusReducer';
import uploadedFile from './uploadFileReducer';
import query from './queryReducer';
import activePage from './activePageReducer'

const rootReducer = combineReducers({
  assets,
  uploadedFile,
  query,
  activePage,
  assetCount,
  ajaxCallInProgress
});

export default rootReducer;
