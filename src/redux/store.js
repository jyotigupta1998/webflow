// import {createStore} from 'redux';
import combineReducer from './combineReducer';
import {configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productsaga from './Product/productsaga';
// const store = createStore(combineReducer);


const sagaMiddleware=createSagaMiddleware();
const store = configureStore({reducer:combineReducer,middleware:()=>[sagaMiddleware]})
sagaMiddleware.run(productsaga)


export default store;