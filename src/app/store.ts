import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import counterReducer from '../features/counter/counterSlice';
import { history } from '../utils';
import createSagaMiddleWare from 'redux-saga';

import verticalMenuReducer from '../features/main/base/components/menu/VerticalMenuSlice';
import rootSaga from './saga';
import homeHeaderReducer from '../features/main/home/header/homeHeaderSlice';
import navBarReduces from '../features/main/base/components/nav/navBarSlice';

const rootReducer = combineReducers({
  router: connectRouter(history),
  couter: counterReducer,
  verticalMenu: verticalMenuReducer,
  homeHeader: homeHeaderReducer,
  navBar: navBarReduces
})


const middleWareSaga = createSagaMiddleWare()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true
  }).concat(middleWareSaga, routerMiddleware(history))
});
middleWareSaga.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
