import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { spawn } from "redux-saga/effects";
import { CitiesSaga, CitiesSlice } from "../components/atom/SearchCity/effects";
import { SubscribeSaga } from "../components/organisms/Footer/effects";
import { LastSaga, LastSlice } from "../components/organisms/LastList/effects";
import {
  RoutesSaga,
  RoutesSlice,
} from "../components/organisms/Routes/effects";
import { FilterRoutesSlice } from "../components/organisms/Routes/FilterRoutes/effects";
import { PostOrderSaga } from "../components/pages/ConfirmPage/effects";
import {
  SeatsSaga,
  SeatsSlice,
} from "../components/pages/LocationSelectPage/effects";
import { FilterSeatsSlice } from "../components/pages/LocationSelectPage/FilterSeats/effects";
import CurrentUserInfo from "./CurrentUserInfo";

export const rootReducer = combineReducers({
  CurrentUserInfo: CurrentUserInfo,
  Cities: CitiesSlice,
  Last: LastSlice,
  Routes: RoutesSlice,
  Seats: SeatsSlice,
  FilterRoutes: FilterRoutesSlice,
  FilterSeats: FilterSeatsSlice,
});

function* rootSaga(): Generator {
  yield spawn(CitiesSaga);
  yield spawn(LastSaga);
  yield spawn(RoutesSaga);
  yield spawn(SeatsSaga);
  yield spawn(PostOrderSaga);
  yield spawn(SubscribeSaga);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
