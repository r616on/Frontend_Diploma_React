import React from "react";
import classNames from "classnames";
import "./style.scss";

function ItemTimetablele({ time, city, railway, className }) {
  return (
    <ul className={classNames("timetable__item", { [className]: className })}>
      <li className="timetable__time">{time}</li>
      <li className="timetable__city-name">{city}</li>
      <li className="timetable__railway-station">{railway}</li>
    </ul>
  );
}

export default ItemTimetablele;
