import React from "react";
import DateWidget from "../../molecules/DateWidget/DateWidget";
import OptionsWidget from "../../molecules/OptionsWidget/OptionsWidget";
// import { Link } from "react-router-dom";
import "./style.scss";

function RideSettingsWidget() {
  return (
    <section className="RideSettingsWidget">
      <div className="RideSettingsWidget__date ">
        <DateWidget />
        <div className="end-line"></div>
      </div>
      <div className="RideSettingsWidget__OptionsWidget">
        <OptionsWidget />
        <div className="end-line"></div>
      </div>
    </section>
  );
}

export default RideSettingsWidget;
