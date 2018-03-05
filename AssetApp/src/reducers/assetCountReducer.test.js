import expect from 'expect';
import React from 'react';
import assetCountReducer from './assetCountReducer';
import * as assetsActions from '../actions/assetsActions';

describe('Test Asset Count Reducer', () => {
    it('should set asset count when passed ASSET COUNT', () => {
        const intialState = {
            assetCount: 0
        }
        const assetCount = 200;
        const action = assetsActions.getTotalAssets(assetCount);
        const newState = assetCountReducer(intialState, action);
        expect(newState).toEqual(200);
    });
});

