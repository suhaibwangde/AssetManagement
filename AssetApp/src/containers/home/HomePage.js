import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as assetsActions from '../../actions/assetsActions';
import HomePage from '../../components/home/HomePage';
import toastr from 'toastr';
const mapStateToProps = (state, ownProps) => {
    return {
        assets: state.assets.size > 0 ? state.assets.toJS() : [],
        uploadedFile: state.uploadedFile.toJS ? state.uploadedFile.toJS() : state.uploadedFile,
        query: state.query.toJS ? state.query.toJS() : state.query,
        assetCount: state.assetCount
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadAssets: (name, data, query) => {
            dispatch(assetsActions.uploadAssets(name, data, query)).then(res => {
                dispatch(assetsActions.uploadFileSuccess(res));
                dispatch(assetsActions.getAssetsCount());
                dispatch(assetsActions.loadAssets(query));
                toastr.options = {
                    "closeButton": true,
                    "debug": true,
                    "newestOnTop": true,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": true,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": 5000,
                    "extendedTimeOut": 0,
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut",
                    "tapToDismiss": false
                }
                if (res) {
                    if (res.uploaded.length > 0)
                        toastr.success('Uploaded file had '+res.uploaded.length + ' Assets', 'Uploaded');
                    if (res.exists.length > 0)
                        toastr.error('Uploaded file had '+res.exists.length + ' existing Assets', 'Skipped');
                    if (res.errors.length > 0)
                        toastr.error(string.join(', ', res.errors), 'Uploaded file had following errors');
                }

            }).
                catch((err) => {
                    console.error(err);
                    toastr.error(err)
                });
        },
        actions: bindActionCreators(assetsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
