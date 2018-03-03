import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import App from '../components/App';


mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallInProgress > 0,
    noOfAssets : state.assets.length
  };
}

export default connect(mapStateToProps)(App);
