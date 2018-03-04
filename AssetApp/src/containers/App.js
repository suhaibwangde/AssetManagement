import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import App from '../components/App';


const mapStateToProps = (state, ownProps) => {
    console.log(state);
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
