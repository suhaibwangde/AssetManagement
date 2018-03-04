import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ConnectedApp from './containers/App';
import ConnectedHomePage from './containers/home/HomePage';

export default (
  <Route path="/" component={ConnectedHomePage}>
    <IndexRoute component={ConnectedHomePage}/>
    <Route path="assets" component={ConnectedHomePage}/>
  </Route>
);
