//import {createStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit';
import { configureStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import articleReducer from '../../redux/articles/articleReducer';
import thunk from'redux-thunk'

const rootReducer = combineReducers ({
    articleReducer
})

const store = configureStore( rootReducer, applyMiddleware(thunk))

export default store;

