import expect from 'expect';
import React from 'react';
import assetsReducer from './assetsReducer';
import * as assetsActions from '../actions/assetsActions';

describe('Test Assets Reducer', () => {
    it('should add Assets when passed LOAD_ASSETS_SUCCESS', () => {
        const intialState = {
            assets: []
        }
        const newAssets = ['New Asset'];
        const action = assetsActions.loadAssetsSuccess(newAssets);
        const newState = assetsReducer(intialState, action);
        expect(newState.size).toEqual(1);
    });
});

