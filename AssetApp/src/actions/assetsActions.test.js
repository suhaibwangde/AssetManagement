import expect from 'expect';
import  React from 'react';
import * as types from './actionTypes';
import  * as assetsActions from './assetsActions';
import thunk from 'redux-thunk';
import nock from 'nock';
import  configureMockStore from 'redux-mock-store';

describe('Test Asset Actions', () => {

  it('loadAssetsSuccess should create a LOAD_ASSETS_SUCCESS action', ()=> {
    const data= [];
    const expectedAction = {
      type: types.LOAD_ASSETS_SUCCESS,
      assets:data
    };

    const action = assetsActions.loadAssetsSuccess(data);
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
    nock('http://localhost:3001').get('/assets/GET').reply(200, {body: {data: {}}})

    done();
  });
});
