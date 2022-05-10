import React, { FC, useEffect } from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import LastList from "../../organisms/LastList/LastList";
import LocationSelect from "../../organisms/LocationSelect/LocationSelect";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import { actionsSeats } from "./effects/slice";

const LocationSelectPage: FC = () => {
  const dispatch = useDispatch();
  // const items = useSelector((state: AppStoreType) => state.Seats.items);
  // const route = useSelector(
  //   (state: AppStoreType) => state.CurrentUserData.route
  // );
  // const ofset = useSelector((state: AppStoreType) => state.FilterRoutes.offset);

  const {
    id,
    have_first_class,
    have_second_class,
    have_third_class,
    have_fourth_class,
    have_wifi,
    have_air_conditioning,
  } = useSelector((state: AppStoreType) => state.FilterSeats);

  useEffect(() => {
    dispatch(actionsSeats.getItems());
  }, [
    dispatch,
    id,
    have_first_class,
    have_second_class,
    have_third_class,
    have_fourth_class,
    have_wifi,
    have_air_conditioning,
  ]);
  return (
    <PageTemplate stepOne>
      <StatusSteps />
      <div className="main TrainSelect">
        <div className="row container">
          <div className="col TrainSelect__Left">
            <RideSettingsWidget />
            <LastList className="TrainSelect__LastTicketWidget" />
          </div>
          <div className="col TrainSelect__main TrainSelect-main">
            <LocationSelect />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default React.memo(LocationSelectPage);
