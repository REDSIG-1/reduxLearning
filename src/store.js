import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from'redux-persist/lib/stateReconciler'
import { todos } from './todos/reducers';

// hooking up todos reducer to Redux Store!
const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers);

// How to save and where to store data
const persistedReducer = persistReducer( persistConfig, rootReducer );

export const configureStore = () => createStore(rootReducer);
