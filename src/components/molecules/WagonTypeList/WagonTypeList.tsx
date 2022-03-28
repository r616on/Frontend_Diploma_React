import React, { FC } from "react";
import WagonTypeInfo from "../../atom/WagonTypeInfo/WagonTypeInfo";
import classNames from "classnames";
// import { Link } from "react-router-dom";

import "./style.scss";
import { IitemRoutes } from "../../organisms/Routes/interfaces";
import numberWithSpaces from "../../../utils/numberWithSpaces";
interface IwagonTypeList {
  className?: any;
  route: IitemRoutes;
}

const WagonTypeList: FC<IwagonTypeList> = ({ className, route }) => {
  return (
    <div
      className={classNames("Wagon-Type-List", {
        [className]: className,
      })}
    >
      {route.departure?.have_fourth_class && (
        <WagonTypeInfo
          className="item"
          name={"Сидячий"}
          amount={route.departure.available_seats_info?.fourth}
          price={numberWithSpaces(
            route.departure.price_info?.fourth?.bottom_price
          )}
        />
      )}

      {route.departure?.have_third_class && (
        <WagonTypeInfo
          className="item"
          name={"Плацкарт"}
          amount={route.departure.available_seats_info?.third}
          price={numberWithSpaces(
            route.departure.price_info?.third?.bottom_price
          )}
        />
      )}
      {route.departure?.have_second_class && (
        <WagonTypeInfo
          className="item"
          name={"Купе"}
          amount={route.departure.available_seats_info?.second}
          price={numberWithSpaces(
            route.departure.price_info?.second?.bottom_price
          )}
        />
      )}
      {route.departure?.have_first_class && (
        <WagonTypeInfo
          className="item"
          name={"Люкс"}
          amount={route.departure.available_seats_info?.first}
          price={numberWithSpaces(
            route.departure.price_info?.first?.bottom_price
          )}
        />
      )}
    </div>
  );
};

export default React.memo(WagonTypeList);
