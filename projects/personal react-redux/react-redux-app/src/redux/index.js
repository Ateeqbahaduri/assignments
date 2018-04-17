import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import dogReducer from './dogs-redux';

const store = createStore (combineReducers({dog: dogReducer}),
applyMiddleware(thunk))
store.subscribe(() =>
console.log (store.getState()));






export default store;