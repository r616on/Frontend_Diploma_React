import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import CatalogSlice from "./CatalogSlice";

export const rootReducer = combineReducers({
  CatalogSlice,
});

function* rootSaga(): Generator {
  yield console.log("1111");
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
