import React, {PropTypes} from 'react';

const App = () => {
    return (
      <div>
          {!this.props.loading && this.props.children}
      </div>
    );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  noOfAssets: PropTypes.number
};

export default (App);
