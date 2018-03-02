import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import  {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import  {loadAssets} from './actions/assetsActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
// can pass initail state from db
const store = configureStore();
store.dispatch(loadAssets());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

