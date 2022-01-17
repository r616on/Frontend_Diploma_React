import React, { Fragment } from "react";

// import { Link } from "react-router-dom";
import "./style.scss";

function ItemTimetablele({ time, city, railway }) {
  return (
    <ul className="timetable__item">
      <li className="timetable__time">{time}</li>
      <li className="timetable__city-name">{city}</li>
      <li className="timetable__railway-station">{railway}</li>
    </ul>
  );
}

export default ItemTimetablele;
