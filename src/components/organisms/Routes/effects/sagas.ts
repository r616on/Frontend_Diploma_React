import { put, call, select, takeLatest } from "redux-saga/effects";
import { AppAPI } from "../../../../api";
import { GetRoutesType } from "../../../../api/interfaces";
import { AppStoreType } from "../../../../store/interfaces";
import requestStatuses from "../../../../utils/requestStatuses";
import { actionsRoutes } from "./slice";

export function* handelSaga(): Generator {
  try {
    const filterObj: any = yield select(
      (state: AppStoreType) => state.FilterRoutes
    );
    const respParams: any = {};
    for (let key in filterObj) {
      if (filterObj[key] !== null) {
        respParams[key] = filterObj[key];
      }
    }
    yield put(actionsRoutes.setRequestStatus(requestStatuses.loading));
    const data: any = yield call<GetRoutesType>(AppAPI.getRoutes, respParams);
    yield put(actionsRoutes.setItems(data.items));
    yield put(actionsRoutes.setTotalCount(data.total_count));
    yield put(actionsRoutes.setRequestStatus(requestStatuses.ok));
  } catch {
    yield put(actionsRoutes.setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeLatest(actionsRoutes.getItems, handelSaga);
}

export default function* rootSaga(): Generator {
  yield watchSaga();
}
