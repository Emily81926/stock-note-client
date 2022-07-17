import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './reducers/index'
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// eslint-disable-next-line 
const composeEnhancement = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default configureStore({
  reducer: combineReducers,
  applyMiddleware: applyMiddleware(thunk),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})