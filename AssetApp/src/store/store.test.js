import expect from 'expect';
import rootReducer from '../reducers';
import { createStore } from 'redux';
import initialState from '../reducers/initialState';
import * as assetsActions from '../actions/assetsActions';

describe('Test Store', () => {
    it('should handle loading assets', () => {
        const store = createStore(rootReducer, initialState);
        const assets = {
            assets: ['test']
        }
        const action = assetsActions.loadAssetsSuccess(assets);
        store.dispatch(action);
        const actual = store.getState().assets.toJS();
        expect(actual).toEqual(assets);
    });
    it('should handle set Active Page', () => {
        const store = createStore(rootReducer, initialState);
        const activePage = 2;
        const action = assetsActions.setActivePage(activePage);
        store.dispatch(action);
        const actual = store.getState().activePage;
        expect(actual).toEqual(activePage);
    });
        it('should handle asset Count', () => {
        const store = createStore(rootReducer, initialState);
        const assetCount = 200;
        const action = assetsActions.getTotalAssets(assetCount);
        store.dispatch(action);
        const actual = store.getState().assetCount;
        expect(actual).toEqual(assetCount);
    });
        it('should handle query', () => {
        const store = createStore(rootReducer, initialState);
        const newQuery = {
            pageNumber: 2
        };
        const action = assetsActions.updateQuery(newQuery);
        store.dispatch(action);
        const actual = store.getState().query.toJS().pageNumber;
        expect(actual).toEqual(newQuery.pageNumber);
    });
        it.only('should handle uploaded file', () => {
        const store = createStore(rootReducer, initialState);
         const action = assetsActions.uploadFileSuccess({ uploaded:['foo'], exists:['foo'], errors:['foo']  });
        store.dispatch(action);
        const actual = store.getState().uploadedFile.toJS()
        expect(actual).toEqual({ name: 'my-File.csv', uploaded:['foo'], exists:['foo'], errors:['foo']  });
    });
});
