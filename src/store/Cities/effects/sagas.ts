// import { put, call, takeEvery, delay, select } from "redux-saga/effects";

// import requestStatuses from "../../../../utils/requestStatuses";

export function* handelSaga(): Generator {
  // try {
  //   const page: any = yield select(
  //     (state: AppStoreType) => state.PlanetsList.page
  //   );
  //   yield put(ActionsPlanetsList.setRequestStatus(requestStatuses.loading));
  //   yield delay(200);
  //   const items: any = yield call(AppAPI.getPlanets, page);
  //   yield put(ActionsPlanetsList.setPlanets(items.results));
  //   yield put(ActionsPlanetsList.setTotal(+items.count));
  //   yield put(ActionsPlanetsList.setRequestStatus(requestStatuses.ok));
  // } catch {
  //   yield put(ActionsPlanetsList.setRequestStatus(requestStatuses.setError));
  // }
}

export function* watchSaga(): Generator {
  // yield takeEvery(ActionsPlanetsList.getPlanets, handelSaga);
}

export default function* rootSaga(): Generator {
  // yield watchSaga();
}
