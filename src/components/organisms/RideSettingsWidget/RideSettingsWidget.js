import React from "react";
import DateWidget from "../../molecules/DateWidget/DateWidget";
// import { Link } from "react-router-dom";
import "./style.scss";

function RideSettingsWidget() {
  return (
    <section className="RideSettingsWidget">
      <div className="RideSettingsWidget__date ">
        <DateWidget />
      </div>
    </section>
  );
}

export default RideSettingsWidget;
