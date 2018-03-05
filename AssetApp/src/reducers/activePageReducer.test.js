import expect from 'expect';
import React from 'react';
import activePageReducer from './activePageReducer';
import * as assetsActions from '../actions/assetsActions';

describe('Test ActivePage Reducer', () => {
    it('should set Active Page when passed SET ACTIVE PAGE', () => {
        const intialState = {
            activePage: 1
        }
        const activePage = 2;
        const action = assetsActions.setActivePage(activePage);
        const newState = activePageReducer(intialState, action);
        expect(newState).toEqual(2);
    });
});

