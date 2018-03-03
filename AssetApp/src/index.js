import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {configureDevStore, configureStore} from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadAssets } from './actions/assetsActions';
import DevTools from './containers/devTools';
// can pass initail state from db
let store = configureStore();
store.dispatch(loadAssets());
const isProd = process.env.NODE_ENV === 'production'
if(!isProd)
  store = configureDevStore();
render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
      {!isProd && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('app')
);

