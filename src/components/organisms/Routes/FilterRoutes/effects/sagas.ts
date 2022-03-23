export function* handelSaga(): Generator {
  // try {
  //   yield put(actionsRoutes.setRequestStatus(requestStatuses.loading));
  //   const data: any = yield call<GetRoutesType>(AppAPI.getRoutes, {
  //     from_city_id: "6212d3c15fc56b48553d43bc",
  //     to_city_id: "6212d3c15fc56b48553d43bd",
  //   });
  //   yield put(actionsRoutes.setItems(data.items));
  //   yield put(actionsRoutes.setTotalCount(data.total_count));
  //   yield put(actionsRoutes.setRequestStatus(requestStatuses.ok));
  // } catch {
  //   yield put(actionsRoutes.setRequestStatus(requestStatuses.setError));
  // }
}

export function* watchSaga(): Generator {
  // yield takeEvery(actionsRoutes.getItems, handelSaga);
}

export default function* rootSaga(): Generator {
  // yield watchSaga();
}
