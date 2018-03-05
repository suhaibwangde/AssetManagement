import {fromJS} from 'immutable'; 
export default fromJS({
  assets:[],
  assetCount: 4,
  query: {
    asset: null,
    sort: null,
    pageNumber: 1,
    noPerPage: 5
  },
  activePage: 1,
  uploadedFile: {
    name: 'my-File.csv',
    success: false 
  },
  ajaxCallInProgress: 0
});
