import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import App from '../components/App';


const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
