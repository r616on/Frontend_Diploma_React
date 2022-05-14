import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import numberWithSpaces from "../../../utils/numberWithSpaces";
import Icon from "../../icon";

import PassengersDetails from "../PassengersDetails/PassengersDetails";
import TripDetails from "../TripDetails/TripDetails";
import "./style.scss";

const SideBarPasengerPage: FC = () => {
  const { Rub } = Icon.other;
  const { route, price } = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo
  );
  return (
    <div className="passengersPage__sidebar">
      <div className="passengersPage__sidebarTitle">Детали поездки</div>
      <div className="passengersPage__sidebarMiddle">
        <TripDetails title="Туда" direction="forward" data={route} />

        <PassengersDetails />
      </div>
      <div className="passengersPage__sidebarResult">
        Итог{" "}
        <div className="passengersPage__sidebarPriceNum">
          <span>{numberWithSpaces(price)}</span> <Rub width={26} height={32} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SideBarPasengerPage);
