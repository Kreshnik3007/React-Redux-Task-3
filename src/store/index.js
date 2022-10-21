import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import selectUserReducer from './selectedUserReducer';


export const reducer = combineReducers({
   selectedUsers : selectUserReducer,
   
})

const store = configureStore({
   reducer,
   
})

export default store;