import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {configureDevStore, configureStore} from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadAssets, getAssetsCount } from './actions/assetsActions';
import DevTools from './containers/devTools';
import '../node_modules/toastr/build/toastr.min.css';
// can pass initail state from db
let store = configureStore();

const isProd = process.env.NODE_ENV === 'production'
if(!isProd)
  store = configureDevStore();

store.dispatch(loadAssets({}, {}, 1, 5));
store.dispatch(getAssetsCount());

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
      {!isProd && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('app')
);

