import React, { FC } from "react";
import DateWidget from "../../molecules/DateWidget/DateWidget";
import OptionsWidget from "../../molecules/OptionsWidget/OptionsWidget";
import Slider from "../../atom/Slider/Slider";
import WidgetTimeSelect from "../../molecules/WidgetTimeSelect/WidgetTimeSelect";
// import { Link } from "react-router-dom";
import "./style.scss";
import { useDispatch } from "react-redux";
import { actionsFilterRoutes } from "../Routes/FilterRoutes/effects/slice";

const RideSettingsWidget: FC = () => {
  const dispatch = useDispatch();

  const marks = {
    600: "600",
    7000: "7000",
  };
  const onChangeHandler = (value: Array<number>) => {
    dispatch(actionsFilterRoutes.setPrice_to(+value[1]));
    dispatch(actionsFilterRoutes.setPrice_from(+value[0]));
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
            min={600}
            max={7000}
            range
            defaultValue={[0, 4500]}
            marks={marks}
            // tooltipVisible={false}
            tooltipVisible
            tooltipPlacement="bottom"
            onAfterChange={(value: Array<number>) => {
              onChangeHandler(value);
            }}
          />
        </div>
        <div className="end-line"></div>
      </div>
      <div className="RideSettingsWidget__ThereWidget ">
        <WidgetTimeSelect there />
        <div className="end-line"></div>
      </div>
      <div className="RideSettingsWidget__BackWidget ">
        <WidgetTimeSelect back />
      </div>
    </section>
  );
};

export default React.memo(RideSettingsWidget);
