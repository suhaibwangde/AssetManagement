import expect from 'expect';
import React from 'react';
import uploadFileReducer from './uploadFileReducer';
import * as assetsActions from '../actions/assetsActions';

describe('Test UploadFile Reducer', () => {
    it('should set uploaded', () => {
        const intialState = {
            name: 'my-File.csv',
            uploaded: [],
            exists: [],
            errors: []
        }
        const action = assetsActions.uploadFileSuccess({ uploaded:['foo'], exists:['foo'], errors:['foo']  });
        const newState = uploadFileReducer(intialState, action);
        expect(newState.toJS()).toEqual({ name: 'my-File.csv', uploaded:['foo'], exists:['foo'], errors:['foo']  });
    });
    it('should set file name', () => {
        const intialState = {
            name: 'my-File.csv',
            success: false
        }
        const file = 'test.xml'
        const action = assetsActions.uploadFileSet(file);
        const newState = uploadFileReducer(intialState, action);
        expect(newState.toJS().name).toEqual('test.xml');
    });
});

