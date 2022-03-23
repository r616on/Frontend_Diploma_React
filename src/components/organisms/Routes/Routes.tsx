import React, { useEffect } from "react";
import "./style.scss";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";

import RoutesList from "../../molecules/RoutesList/RoutesList";
import Pagination from "../../molecules/Pagination/Pagination";
import LastTicketList from "../../organisms/LastTicketList/LastTicketList";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import RouresTop from "../../molecules/RouresTop/RouresTop";
import { actionsRoutes } from "./effects/slice";

function Routes() {
  const dispatch = useDispatch();
  const items = useSelector((state: AppStoreType) => state.Routes.items);
  useEffect(() => {
    dispatch(actionsRoutes.getItems());
  }, [dispatch]);

  return (
    <div className="main Roures">
      <div className="row container">
        <div className="col Roures__Left">
          <RideSettingsWidget />
          <LastTicketList className="Roures__LastTicketWidget" />
        </div>
        <div className="col Roures__main Roures-main">
          <RouresTop className="Roures-main__top" />
          <RoutesList className="Roures-main__list" items={items} />
          <Pagination className="Roures-main__Pagination" />
        </div>
      </div>
    </div>
  );
}

export default Routes;
