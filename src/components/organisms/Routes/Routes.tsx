import React, { FC, useEffect } from "react";
import "./style.scss";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import RoutesList from "../../molecules/RoutesList/RoutesList";
import LastList from "../LastList/LastList";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import RouresTop from "../../molecules/RouresTop/RouresTop";
import { actionsRoutes } from "./effects/slice";
import PaginationCustom from "../../molecules/PaginationCustom/PaginationCustom";

const Routes: FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: AppStoreType) => state.Routes.items);
  // const ofset = useSelector((state: AppStoreType) => state.FilterRoutes.offset);
  const { total_count } = useSelector((state: AppStoreType) => state.Routes);
  const {
    limit,
    offset,
    have_first_class,
    have_second_class,
    have_third_class,
    have_fourth_class,
    have_wifi,
    have_express,
    date_start,
    date_end,
    price_from,
    price_to,
    start_departure_hour_from,
    start_departure_hour_to,
    start_arrival_hour_from,
    start_arrival_hour_to,
    end_departure_hour_from,
    end_departure_hour_to,
    end_arrival_hour_from,
    end_arrival_hour_to,
  } = useSelector((state: AppStoreType) => state.FilterRoutes);

  useEffect(() => {
    dispatch(actionsRoutes.getItems());
  }, [
    dispatch,
    limit,
    offset,
    have_first_class,
    have_second_class,
    have_third_class,
    have_fourth_class,
    have_wifi,
    have_express,
    date_start,
    date_end,
    price_from,
    price_to,
    start_departure_hour_from,
    start_departure_hour_to,
    start_arrival_hour_from,
    start_arrival_hour_to,
    end_departure_hour_from,
    end_departure_hour_to,
    end_arrival_hour_from,
    end_arrival_hour_to,
  ]);

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
          <PaginationCustom
            className="Roures-main__Pagination"
            total={total_count}
            pageSize={limit}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Routes);
