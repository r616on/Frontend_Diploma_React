import React, { FC } from "react";
import { format } from "date-fns";
import classNames from "classnames";
import "./style.scss";
interface IitemTimetablele {
  time: number | undefined;
  city: string | undefined;
  railway: string | undefined;
  className?: any;
}
const ItemTimetablele: FC<IitemTimetablele> = ({
  time,
  city,
  railway,
  className,
}) => {
  return (
    <ul className={classNames("timetable__item", { [className]: className })}>
      <li className="timetable__time">
        {format(new Date(+`${time}000`), "HH : mm")}
      </li>
      <li className="timetable__city-name">{city}</li>
      <li className="timetable__railway-station">{railway}</li>
    </ul>
  );
};

export default React.memo(ItemTimetablele);
