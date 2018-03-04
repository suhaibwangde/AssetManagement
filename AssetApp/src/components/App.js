import React, {PropTypes} from 'react';

class App extends React.Component{
  render(){
    console.log(this.props.children);
    return (
      <div>
          {!this.props.loading && this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool
};



export default (App);
