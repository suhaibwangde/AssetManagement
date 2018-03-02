import React, {PropTypes} from 'react';

const AssetList = ({assets}) => {
  return (<div>
    {assets}
  </div>);
};

AssetList.propTypes = {
  assets: PropTypes.array.isRequired
};

export default AssetList;
