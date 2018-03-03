import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as assetsActions from '../../actions/assetsActions';
import HomePage from '../../components/home/HomePage';

mapStateToProps = (state, ownProps) => {
    return {
        assets: state.assets,
        totalAssets: state.totalAssets
    };
}

mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(assetsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
