import expect from 'expect';
import React from 'react';
import * as types from './actionTypes';
import * as assetsActions from './assetsActions';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Test Asset Actions', () => {

  it('loadAssetsSuccess should create a LOAD_ASSETS_SUCCESS action', () => {
    const data = [];
    const expectedAction = {
      type: types.LOAD_ASSETS_SUCCESS,
      assets: data
    };

    const action = assetsActions.loadAssetsSuccess(data);
    expect(action).toEqual(expectedAction);
  });
  it('uploadFileSuccess should create a UPLOAD_ASSETS_SUCCESS action', () => {
    const expectedAction = {
      type: types.UPLOAD_ASSETS_SUCCESS,
      data: []
    };

    const action = assetsActions.uploadFileSuccess([]);
    expect(action).toEqual(expectedAction);
  });
  it('uploadFileSet should create a UPLOAD_FILE_SET action', () => {
    const data = [];
    const expectedAction = {
      type: types.UPLOAD_FILE_SET,
      name: []
    };

    const action = assetsActions.uploadFileSet(data);
    expect(action).toEqual(expectedAction);
  });
  it('getTotalAssets should create a TOTAL_ASSETS action', () => {
    const data = [];
    const expectedAction = {
      type: types.TOTAL_ASSETS,
      count: []
    };

    const action = assetsActions.getTotalAssets(data);
    expect(action).toEqual(expectedAction);
  });
  it('updateQuery should create a UPDATE_QUERY action', () => {
    const data = [];
    const expectedAction = {
      type: types.UPDATE_QUERY,
      query: []
    };

    const action = assetsActions.updateQuery(data);
    expect(action).toEqual(expectedAction);
  });
  it('setActivePage should create a SET_ACTIVE_PAGE action', () => {
    const data = [];
    const expectedAction = {
      type: types.SET_ACTIVE_PAGE,
      activePage: []
    };

    const action = assetsActions.setActivePage(data);
    expect(action).toEqual(expectedAction);
  });

});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and load assets when LOAD_ASSETS_SUCCESS', (done) => {
    //Example to nock
    nock('http://localhost:3001').get('/assets/GET').reply(200, { body: { data: {} } })

    done();
  });
})