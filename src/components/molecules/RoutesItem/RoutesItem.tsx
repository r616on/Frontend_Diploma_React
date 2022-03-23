import React, { FC } from "react";
import classNames from "classnames";
import AdditionalServices from "../../atom/AdditionalServices/AdditionalServices";
import Button from "../../atom/Button/Button";
import ItemTimetablele from "../../atom/ItemTimetablele/ItemTimetableIe";
import WagonTypeList from "../WagonTypeList/WagonTypeList";
import "./style.scss";
import { IitemRoutes } from "../../organisms/Routes/interfaces";
interface IroutesItem {
  className?: any;
  item: IitemRoutes;
}

const RoutesItem: FC<IroutesItem> = ({ className, item }) => {
  let a = new Date();
  a.setUTCDate(1645643651);
  console.log(item);
  return (
    <section
      className={classNames("RoutesItem", {
        [className]: className,
      })}
    >
      <div className="RoutesItem__row">
        <div className="RoutesItem__Train-name Train-name">
          <div className="Train-name__icon"></div>
          <div className="Train-name__name">{item.departure?.train?.name}</div>
          <ul className="Train-name__path">
            <li className="icon-arrowRMini toUpperCase">
              {item.departure?.from?.city?.name}
            </li>
            <li className="icon-arrowRMini toUpperCase">
              {item.departure?.to?.city?.name}
            </li>
            <li className="toUpperCase">
              {item.departure?.to?.railway_station_name}
            </li>
          </ul>
        </div>
        <div className="RoutesItem__timetable timetable">
          <div className="timetable__row there">
            <ItemTimetablele
              time={item.departure?.from?.datetime}
              city={item.departure?.from?.city?.name}
              railway={item.departure?.from?.railway_station_name}
            />
            <div className="timetable__duration">
              <div className="duration-time">8 : 32</div>
              <div className="there-icon"></div>
            </div>
            <ItemTimetablele
              time={item.departure?.to?.datetime}
              city={item.departure?.to?.city?.name}
              railway={item.departure?.to?.railway_station_name}
            />
          </div>
          <div className="timetable__row back">
            <ItemTimetablele
              time={item.departure?.from?.datetime}
              city={item.departure?.from?.city?.name}
              railway={item.departure?.from?.railway_station_name}
            />
            <div className="timetable__duration reverse">
              <div className="duration-time">8 : 32</div>
              <div className="there-icon"></div>
            </div>
            <ItemTimetablele
              time={item.departure?.to?.datetime}
              city={item.departure?.to?.city?.name}
              railway={item.departure?.to?.railway_station_name}
            />
          </div>
        </div>
        <div className="RoutesItem__Train-options Train-options">
          <WagonTypeList className={"Train-options__WagonTypeList"} />
          <AdditionalServices className={"Train-options__AdditionalServices"} />
          <Button type={"selectPlaces"} className={"Train-options__button"} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(RoutesItem);
