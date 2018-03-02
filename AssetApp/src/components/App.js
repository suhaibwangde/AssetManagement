import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
class App extends React.Component{
  render(){
    return (
      <div>
        <Header {...this.props}/>
        <div id="main">
          {!this.props.loading && this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  noOfAssets: PropTypes.number
};


function mapStateToProps (state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0,
    noOfAssets : state.assets.length
  };
}


export default connect(mapStateToProps)(App);
