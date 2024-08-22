import userReducer from './userReducer';
import orderReducer from './orderReducer';
import { combineReducers } from 'redux';

// 여러개의 리듀서를 하나로 합치기
export const reducer = combineReducers({ 
    userReducer, 
    orderReducer 
});