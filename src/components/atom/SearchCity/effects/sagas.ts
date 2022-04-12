import { put, call, takeEvery, delay, select } from "redux-saga/effects";
import { AppStoreType } from "../../../../store/interfaces";
import { actionsCities } from "./slice";

import requestStatuses from "../../../../utils/requestStatuses";
import { AppAPI } from "../../../../api";

export function* handelSaga(): Generator {
  try {
    const params: any = yield select(
      (state: AppStoreType) => state.Cities.searchStr
    );
    if (params !== "") {
      yield put(actionsCities.setRequestStatus(requestStatuses.loading));
      yield delay(200);
      const items: any = yield call(AppAPI.getCities, params);
      yield put(actionsCities.setItems(items));
      yield put(actionsCities.setRequestStatus(requestStatuses.ok));
    }
  } catch {
    yield put(actionsCities.setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeEvery(actionsCities.getItems, handelSaga);
}

export default function* rootSaga(): Generator {
  yield watchSaga();
}
