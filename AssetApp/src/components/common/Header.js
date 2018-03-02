import React from 'react';
import {Link, IndexLink} from 'react-router';
import Loadable  from 'react-loading-animation';
const Header = ({loading, noOfAssets}) => {
  return (
    <div id="header">
      <div id="nav">
        <ul>
          <li className="first">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <IndexLink to="/assets" activeClassName="active">Assets ({noOfAssets})</IndexLink>
          </li>
        </ul>
      </div>
      {loading && <div id="loading"><Loadable/></div>}
    </div>
  );
};

Header.propTypes ={
  loading: React.PropTypes.bool,
  noOfAssets: React.PropTypes.number
};

export  default Header;
