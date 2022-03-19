import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import AppStatus from "./AppStatusSlice";
import { CitiesSaga, CitiesSlice } from "./Cities/effects";
import { LastSaga, LastSlice } from "./Last/effects";
import { RoutesSaga, RoutesSlice } from "./Routes/effects";
import { SeatsSaga, SeatsSlice } from "./Seats/effects";

export const rootReducer = combineReducers({
  AppStatus,
  Cities: CitiesSlice,
  Last: LastSlice,
  Routes: RoutesSlice,
  Seats: SeatsSlice,
});

function* rootSaga(): Generator {
  yield fork(CitiesSaga);
  yield fork(LastSaga);
  yield fork(RoutesSaga);
  yield fork(SeatsSaga);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
