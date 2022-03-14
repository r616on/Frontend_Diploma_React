import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import AppStatus from "./AppStatusSlice";

export const rootReducer = combineReducers({
  AppStatus,
});

function* rootSaga(): Generator {
  // yield fork(ItemsListSaga);
  // yield fork(FullPeopleSaga);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
