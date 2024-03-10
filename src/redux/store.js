import {createStore} from 'redux';
import combineReducer from './combineReducer';
import {configureStore } from '@reduxjs/toolkit';

// const store = createStore(combineReducer);
const store = configureStore({reducer:combineReducer})
export default store;