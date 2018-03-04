import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as assetsActions from '../../actions/assetsActions';
import HomePage from '../../components/home/HomePage';
import toastr from 'toastr';
const mapStateToProps = (state, ownProps) => {
    return {
        assets: state.assets.size > 0 ? state.assets.toJS(): [],
        uploadedFile: state.uploadedFile.toJS(),
        query: state.query.toJS(),
        assetCount: state.assetCount
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadAssets: (name, data)=> {
            dispatch(assetsActions.uploadAssets(name, data)).catch((err)=> {
                console.error(err);
                toastr.error(err)
            });
        },
        setToUpload: (name) => {
            assetsActions.setToUpload(name);
        },
        getAssetsCount: () => {
            dispatch(assetsActions.getAssetsCount());
        },
        updateQuery: (query) => {
             dispatch(assetsActions.loadAssets(query));
        },
        actions: bindActionCreators(assetsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
