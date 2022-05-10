import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import logicReducer from "./logicSlice"

const combinedAllReducers = combineReducers({
  logic:logicReducer
});

export const store = () => configureStore({ reducer: combinedAllReducers })

export const storeWrapper = createWrapper(store, { debug: true });