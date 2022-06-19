import React, { FC } from "react";
import { format } from "date-fns";
import classNames from "classnames";
import AdditionalServices from "../../atom/AdditionalServices/AdditionalServices";
import Button from "../../atom/Button/Button";
import ItemTimetablele from "../../atom/ItemTimetablele/ItemTimetableIe";
import WagonTypeList from "../WagonTypeList/WagonTypeList";
import "./style.scss";
import { IitemRoutes } from "../../organisms/Routes/interfaces";
import { useDispatch } from "react-redux";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";
import { useNavigate } from "react-router-dom";
import { actFilterSeatReq } from "../../pages/LocationSelectPage/FilterSeats/effects/slice";
interface IroutesItem {
  className?: any;
  route: IitemRoutes;
  edit?: boolean;
  handler?: Function;
}

const RoutesItem: FC<IroutesItem> = ({ className, route, edit, handler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerOnClick = (e: any) => {
    e.preventDefault();
    dispatch(actCurrentUserInfo.setRoute(route));
    dispatch(actFilterSeatReq.setId(route.departure._id));
    dispatch(actCurrentUserInfo.setStatusStep(2));
    navigate("/two");
  };
  return (
    <section
      className={classNames("RoutesItem", {
        [className]: className,
      })}
    >
      <div className="RoutesItem__row">
        <div className="RoutesItem__Train-name Train-name">
          <div className="Train-name__icon"></div>
          <div className="Train-name__name">{route.departure?.train?.name}</div>
          <ul className="Train-name__path">
            <li className="icon-arrowRMini toUpperCase">
              {route.departure?.from?.city?.name}
            </li>
            <li className="icon-arrowRMini toUpperCase">
              {route.departure?.to?.city?.name}
            </li>
            <li className="toUpperCase">
              {route.departure?.to?.railway_station_name}
            </li>
          </ul>
        </div>
        <div className="RoutesItem__timetable timetable">
          <div className="timetable__row there">
            <ItemTimetablele
              time={route.departure?.from?.datetime}
              city={route.departure?.from?.city?.name}
              railway={route.departure?.from?.railway_station_name}
            />
            <div className="timetable__duration">
              <div className="duration-time">
                {format(
                  new Date(+`${route.departure?.duration}000`),
                  "HH : mm"
                )}
              </div>
              <div className="there-icon"></div>
            </div>
            <ItemTimetablele
              time={route.departure?.to?.datetime}
              city={route.departure?.to?.city?.name}
              railway={route.departure?.to?.railway_station_name}
            />
          </div>
          {route?.arrival && (
            <div className="timetable__row back">
              <ItemTimetablele
                time={route.arrival?.from?.datetime}
                city={route.arrival?.from?.city?.name}
                railway={route.arrival?.from?.railway_station_name}
              />
              <div className="timetable__duration reverse">
                <div className="duration-time">
                  {format(
                    new Date(+`${route.arrival?.duration}000`),
                    "HH : mm"
                  )}
                </div>
                <div className="there-icon"></div>
              </div>
              <ItemTimetablele
                time={route.arrival?.to?.datetime}
                city={route.arrival?.to?.city?.name}
                railway={route.arrival?.to?.railway_station_name}
              />
            </div>
          )}
        </div>
        <div className="RoutesItem__Train-options Train-options">
          <WagonTypeList
            className={"Train-options__WagonTypeList"}
            route={route}
          />
          <AdditionalServices
            className={"Train-options__AdditionalServices"}
            express={route?.is_express}
            wiFi={route?.departure?.have_wifi}
          />
          {!edit && (
            <Button
              type={"selectPlaces"}
              className={"Train-options__button"}
              handler={handlerOnClick}
            />
          )}
          {edit && (
            <Button
              type={"change"}
              className={"Train-options__button"}
              // @ts-ignore
              handler={handler}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(RoutesItem);
