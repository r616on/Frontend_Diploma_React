import { put, call, select, takeLatest } from "redux-saga/effects";
import { AppAPI } from "../../../../api";
import { PostOrderType } from "../../../../api/interfaces";
import { actCurrentUserInfo } from "../../../../store/CurrentUserInfo";
import { AppStoreType } from "../../../../store/interfaces";
import requestStatuses from "../../../../utils/requestStatuses";

export function* handelSaga(): Generator {
  try {
    const personalData: any = yield select(
      (state: AppStoreType) => state.CurrentUserInfo.personalData
    );
    const route: any = yield select(
      (state: AppStoreType) => state.CurrentUserInfo.route
    );
    const passengerFullInfo: any = yield select(
      (state: AppStoreType) => state.CurrentUserInfo.passengerFullInfo
    );
    const seatsChild: any = yield select(
      (state: AppStoreType) => state.CurrentUserInfo.seatsChild
    );

    const respParams: any = {
      user: {
        first_name: personalData.name,
        last_name: personalData.surname,
        patronymic: personalData.patr,
        phone: personalData.phone,
        email: personalData.email,
        payment_method: personalData.payCash ? "cash" : "online",
      },
      departure: {
        route_direction_id: route.departure._id,
        seats: [
          {
            coach_id: route.departure._id,
            person_info: {
              is_adult: passengerFullInfo[0].age === "adult" ? true : false,
              first_name: passengerFullInfo[0].name,
              last_name: passengerFullInfo[0].surname,
              patronymic: passengerFullInfo[0].patr,
              gender: true,
              birthday: passengerFullInfo[0].birthday,
              document_type: passengerFullInfo[0].document,
              document_data: `${passengerFullInfo[0].passportSeries} ${passengerFullInfo[0].passportNumber}`,
            },
            seat_number: passengerFullInfo[0].uidd,
            is_child: passengerFullInfo[0].age !== "adult" ? true : false,
            include_children_seat: seatsChild.lenght > 0 ? true : false,
          },
        ],
      },
    };

    yield put(actCurrentUserInfo.setRequestStatus(requestStatuses.loading));
    const data: any = yield call<PostOrderType>(AppAPI.postOrder, respParams);
    yield put(actCurrentUserInfo.setOrderStatus(data));
    yield put(actCurrentUserInfo.setRequestStatus(requestStatuses.ok));
  } catch (error) {
    console.log(error);
    yield put(actCurrentUserInfo.setRequestStatus(requestStatuses.setError));
  }
}

export function* watchSaga(): Generator {
  yield takeLatest(actCurrentUserInfo.postOrder, handelSaga);
}

export default function* rootSaga(): Generator {
  yield watchSaga();
}
