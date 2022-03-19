import { put, call, takeEvery } from "redux-saga/effects";
import { AppAPI } from "../../../api";
import { GetLastType } from "../../../api/interfaces";
import requestStatuses from "../../../utils/requestStatuses";
import { actionsLast } from "./slice";

export function* handelSaga(): Generator {
  try {
    yield put(actionsLast.setRequestStatus(requestStatuses.loading));
    const data: any = yield call<GetLastType>(AppAPI.getLast);
    yield put(actionsLast.setItems(data));
    yield put(actionsLast.setRequestStatus(requestStatuses.ok));
  } catch {
    yield put(actionsLast.setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeEvery(actionsLast.getItems, handelSaga);
}

export default function* rootSaga(): Generator {
  yield watchSaga();
}
