import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
class App extends React.Component{
  render(){
    console.log(this.props.children)
    return (
      <div>
          {!this.props.loading && this.props.children}
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
