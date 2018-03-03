import React, { PropTypes } from 'react';
import 'react-table/react-table.css';
import AssetList from './AssetList';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import './HomePage.scss';

const HomePage = ({ assets, totalAssets }) => {
  return (
    <div id="main" className='HomePage'>
      <div id="content" className='HomePage_Content'>
        {totalAssets && <div className='HomePage_Content_People'>{totalAssets} People</div>}
        {assets && assets.length > 0 && <AssetList assets={assets} />}
        {assets && assets.length === 0 && <p>No Assets found</p>}
      </div>
    </div>
  );
}

HomePage.propTypes = {
  assets : PropTypes.array.isRequired,
  totalAssets: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

HomePage.contextTypes = {
  router: PropTypes.object
};

export default HomePage;
