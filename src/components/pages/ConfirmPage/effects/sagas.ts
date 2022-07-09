import { put, call, select, takeLatest } from "redux-saga/effects";
import { AppAPI } from "../../../../api";
import { PostSubscrubeType } from "../../../../api/interfaces";
import { actCurrentUserInfo } from "../../../../store/CurrentUserInfo";
import { AppStoreType } from "../../../../store/interfaces";
import requestStatuses from "../../../../utils/requestStatuses";

export function* handelSaga(): Generator {
  try {
    const subscribeUserEmail: any = yield select(
      (state: AppStoreType) => state.CurrentUserInfo.subscribeUserEmail
    );

    yield put(actCurrentUserInfo.setRequestStatus(requestStatuses.loading));
    const data: any = yield call<PostSubscrubeType>(
      AppAPI.postSubscrube,
      subscribeUserEmail
    );
    yield put(actCurrentUserInfo.setSubscribeUserEmailStatus(data));
    yield put(actCurrentUserInfo.setRequestStatus(requestStatuses.ok));
  } catch (error) {
    console.log(error);
    yield put(actCurrentUserInfo.setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeLatest(actCurrentUserInfo.setSubscribeUserEmail, handelSaga);
}

export default function* rootSaga(): Generator {
  yield watchSaga();
}
