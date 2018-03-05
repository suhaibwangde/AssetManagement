import expect from 'expect';
import React from 'react';
import uploadFileReducer from './uploadFileReducer';
import * as assetsActions from '../actions/assetsActions';

describe('Test UploadFile Reducer', () => {
    it('should set upload to success', () => {
        const intialState ={
                name: 'my-File.csv',
                success: false
        }
        const action = assetsActions.uploadFileSuccess(true);
        const newState = uploadFileReducer(intialState, action);
        expect(newState.toJS().success).toEqual(true);
    });
    it('should set file name', () => {
        const intialState ={
                name: 'my-File.csv',
                success: false
        }
         const file = 'test.xml'
        const action = assetsActions.uploadFileSet(file);
        const newState = uploadFileReducer(intialState, action);
        expect(newState.toJS().name).toEqual('test.xml');
    });
});

