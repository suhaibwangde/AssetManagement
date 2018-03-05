import expect from 'expect';
import React from 'react';
import queryReducer from './queryReducer';
import * as assetsActions from '../actions/assetsActions';

describe('Test Query Reducer', () => {
    it('should update query when passed new pagenumber  and action UPDATE_QUERY', () => {
        const intialState = {
            asset: null,
            sort: null,
            pageNumber: 1,
            noPerPage: 5

        }
        const newQuery = {
            pageNumber: 2
        };
        const action = assetsActions.updateQuery(newQuery);
        const newQueryState = queryReducer(intialState, action);
        expect(newQueryState.toJS().pageNumber).toEqual(2);
    });
    it('should update query when passed new noPerPage  and action UPDATE_QUERY', () => {
        const intialState = {
            asset: null,
            sort: null,
            pageNumber: 1,
            noPerPage: 5
        }
        const newQuery = {
            noPerPage: 10
        };
        const action = assetsActions.updateQuery(newQuery);
        const newQueryState = queryReducer(intialState, action);
        expect(newQueryState.toJS().noPerPage).toEqual(10);
    });
    it('should update query when passed sort lastname by 1  and action UPDATE_QUERY', () => {
        const intialState = {
            asset: null,
            sort: null,
            pageNumber: 1,
            noPerPage: 5
        }
        const newQuery = {
            sort: {
                'LastName': 1
            }
        };
        const action = assetsActions.updateQuery(newQuery);
        const newQueryState = queryReducer(intialState, action);
        expect(newQueryState.toJS().sort.LastName).toEqual(1);
        expect(newQueryState.toJS().asset).toEqual(null);
    });

    it('should update query when passed sort lastname by 1  and action UPDATE_QUERY', () => {
        const intialState = {
            asset: null,
            sort: null,
            pageNumber: 1,
            noPerPage: 5
        }
        const newQuery = {
            asset: ['test']
        };
        const action = assetsActions.updateQuery(newQuery);
        const newQueryState = queryReducer(intialState, action);
        expect(newQueryState.toJS().asset).toEqual(['test']);
    });


    it('should update query verify updates', () => {
        const intialState = {
            asset: null,
            sort: null,
            pageNumber: 1,
            noPerPage: 5
        }
        const newQuery = {
            asset: ['test']
        };
        const action = assetsActions.updateQuery(newQuery);
        const newQueryState = queryReducer(intialState, action);
        const newSortQuery = {
            sort: {
                'LastName': 1
            }
        };
        const sortAction = assetsActions.updateQuery(newSortQuery);
        const newSortState = queryReducer(newQueryState, sortAction);
        expect(newSortState.toJS().asset).toEqual(['test']);
        expect(newSortState.toJS().sort.LastName).toEqual(1);

    });
});