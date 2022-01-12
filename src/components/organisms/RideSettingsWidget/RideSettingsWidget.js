import React, { useState } from "react";
import DateWidget from "../../molecules/DateWidget/DateWidget";
import OptionsWidget from "../../molecules/OptionsWidget/OptionsWidget";
import Slider from "../../atom/Slider/Slider";
import ThereWidget from "../../molecules/ThereWidget/ThereWidget";
// import { Link } from "react-router-dom";
import "./style.scss";

function RideSettingsWidget() {
  const marks = {
    1920: "1920",
    7000: "7000",
  };

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
        <div className="Price__row ">
          <h3 className="Price__title">Стоимость</h3>
          <div className="Price__text">
            <span>от</span>
            <span>до</span>
          </div>
          <Slider
            className="Slider"
            min={1920}
            max={7000}
            range
            defaultValue={[0, 4500]}
            marks={marks}
            tooltipVisible={false}
            // trackStyle={"trackStyle"}
            // handleStyle={"handleStyle"}
          />
        </div>
        <div className="end-line"></div>
      </div>
      <div className="RideSettingsWidget__ThereWidget ">
        <ThereWidget />
        <div className="end-line"></div>
      </div>
    </section>
  );
}

export default RideSettingsWidget;
