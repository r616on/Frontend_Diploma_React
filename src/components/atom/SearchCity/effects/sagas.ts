import {
  put,
  call,
  select,
  debounce,
  spawn,
  takeLatest,
} from "redux-saga/effects";
import { AppStoreType } from "../../../../store/interfaces";
import { actionsCities } from "./slice";

import requestStatuses from "../../../../utils/requestStatuses";
import { AppAPI } from "../../../../api";

export function* handelReqGet(): Generator {
  try {
    const params: any = yield select(
      (state: AppStoreType) => state.Cities.searchTime
    );
    if (params !== "") {
      yield put(actionsCities.setRequestStatus(requestStatuses.loading));
      const items: any = yield call(AppAPI.getCities, params);
      yield put(actionsCities.setItems(items));
      yield put(actionsCities.setRequestStatus(requestStatuses.ok));
    }
  } catch {
    yield put(actionsCities.setRequestStatus(requestStatuses.setError));
  }
}
function* handleChangeSearchSaga() {
  yield put(actionsCities.getItems());
}

function* watchChangeSearchSaga() {
  yield debounce(300, actionsCities.changeSearchField, handleChangeSearchSaga);
}
export function* watchSaga(): Generator {
  yield takeLatest(actionsCities.getItems, handelReqGet);
}

export default function* rootSaga(): Generator {
  yield spawn(watchSaga);
  yield spawn(watchChangeSearchSaga);
}
