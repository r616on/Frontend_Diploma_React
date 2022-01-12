import React from "react";
import DateWidget from "../../molecules/DateWidget/DateWidget";
import OptionsWidget from "../../molecules/OptionsWidget/OptionsWidget";
import { Slider } from "antd";
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
      <div className="RideSettingsWidget__Price Price">
        <h3 className="Price__title">Стоимость</h3>
        <Slider
          className="Price__slider"
          min={1920}
          max={7000}
          range
          defaultValue={[0, 4500]}
        />
      </div>
    </section>
  );
}

export default RideSettingsWidget;
