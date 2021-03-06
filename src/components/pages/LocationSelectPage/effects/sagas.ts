import { put, call, select, takeLatest } from "redux-saga/effects";
import { AppAPI } from "../../../../api";
import { GetIdSeatsType } from "../../../../api/interfaces";

import { AppStoreType } from "../../../../store/interfaces";
import requestStatuses from "../../../../utils/requestStatuses";
import { actionsSeats } from "./slice";

export function* handelSaga(): Generator {
  try {
    const filterObj: any = yield select(
      (state: AppStoreType) => state.FilterSeats
    );
    const respParams: any = {};
    for (let key in filterObj) {
      if (filterObj[key] !== null) {
        respParams[key] = filterObj[key];
      }
    }
    yield put(actionsSeats.setRequestStatus(requestStatuses.loading));
    const data: any = yield call<GetIdSeatsType>(AppAPI.getIdSeats, respParams);
    yield put(actionsSeats.setItems(data));
    yield put(actionsSeats.setRequestStatus(requestStatuses.ok));
  } catch {
    yield put(actionsSeats.setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeLatest(actionsSeats.getItems, handelSaga);
}

export default function* rootSaga(): Generator {
  yield watchSaga();
}
