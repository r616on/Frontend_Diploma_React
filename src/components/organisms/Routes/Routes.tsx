import React, { useEffect } from "react";
import "./style.scss";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";

import RoutesList from "../../molecules/RoutesList/RoutesList";
import Pagination from "../../molecules/Pagination/Pagination";
import LastList from "../LastList/LastList";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import RouresTop from "../../molecules/RouresTop/RouresTop";
import { actionsRoutes } from "./effects/slice";

function Routes() {
  const dispatch = useDispatch();
  const items = useSelector((state: AppStoreType) => state.Routes.items);
  // const ofset = useSelector((state: AppStoreType) => state.FilterRoutes.offset);
  // console.log(ofset);
  const { total_count } = useSelector((state: AppStoreType) => state.Routes);
  const { limit, offset } = useSelector(
    (state: AppStoreType) => state.FilterRoutes
  );
  useEffect(() => {
    dispatch(actionsRoutes.getItems());
  }, [dispatch, limit, offset]);

  return (
    <div className="main Roures">
      <div className="row container">
        <div className="col Roures__Left">
          <RideSettingsWidget />
          <LastList className="Roures__LastTicketWidget" />
        </div>
        <div className="col Roures__main Roures-main">
          <RouresTop
            className="Roures-main__top"
            total={total_count}
            pageSize={limit}
          />
          <RoutesList className="Roures-main__list" items={items} />
          <Pagination
            className="Roures-main__Pagination"
            total={total_count}
            pageSize={limit}
          />
        </div>
      </div>
    </div>
  );
}

export default Routes;
