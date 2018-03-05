import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as assetsActions from '../../actions/assetsActions';
import AssetList from '../../components/home/AssetList';
import toastr from 'toastr';
const mapStateToProps = (state, ownProps) => {
    return {
        assets: state.assets.size > 0 ? state.assets.toJS() : [],
        query: state.query.toJS(),
        activePage: state.activePage,
        count: state.assetCount
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQueryAndLoad: (query, property, data) => {
            switch (property) {
                case 'sort': {
                    const sort = {};
                    if (query[property] && query[property][data] && query[property][data] === 1) {
                        sort[data] = -1;
                        dispatch(assetsActions.loadAssets(Object.assign({}, query, { sort })));
                    } else {
                        sort[data] = 1;
                        dispatch(assetsActions.loadAssets(Object.assign({}, query, { sort })));
                    }
                }
                    break;
                case 'pageNumber': {
                    dispatch(assetsActions.loadAssets(Object.assign({}, query, { 'pageNumber': data })));
                }
                    break;
                case 'noPerPage': {
                    dispatch(assetsActions.loadAssets(Object.assign({}, query, { 'noPerPage': data })));
                }
                    break;
                default:
                    break;
            }
        },
        updateQuery: (query, property, data) => {
            switch (property) {
                case 'sort': {
                    const sort = {};
                    if (query[property] && query[property][data] && query[property][data] === 1) {
                        sort[data] = -1;
                        dispatch(assetsActions.updateQuery(Object.assign({}, query, { sort })));
                    } else {
                        sort[data] = 1;
                        dispatch(assetsActions.updateQuery(Object.assign({}, query, { sort })));
                    }
                }
                    break;
                case 'pageNumber': {
                    dispatch(assetsActions.updateQuery(Object.assign({}, query, { 'pageNumber': data })));
                }
                    break;
                case 'noPerPage': {
                    dispatch(assetsActions.updateQuery(Object.assign({}, query, { 'noPerPage': data })));
                }
                    break;
                default:
                    break;
            }
        },
        loadAssets: (query) => {
              dispatch(assetsActions.loadAssets(query));
        },
        actions: bindActionCreators(assetsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetList);
