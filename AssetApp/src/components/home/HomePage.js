import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';
import * as assetsActions from '../../actions/assetsActions';
import 'react-table/react-table.css';
import AssetList from './AssetList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import './HomePage.scss';

class AssetsPage extends React.Component {
  constructor(props, context){
    super(props, context);
  }


  render () {
      const {assets, totalAssets} = this.props;
    
        return (
          <div id="main" className='HomePage'>
            <div id="content" className='HomePage_Content'>
              {totalAssets && <div> {totalAssets} People</div> }
              {assets && assets.length > 0 && <AssetList assets={assets}/>}
              {assets && assets.length === 0 && <p>No Assets found</p>}
            </div>
          </div>
        );

    }
}

AssetsPage.propTypes = {
  assets : PropTypes.array.isRequired,
  totalAssets: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

AssetsPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state, ownProps) {
  return {
    assets: state.assets,
    totalAssets: state.totalAssets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assetsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (AssetsPage);
