import React, { FC, useState } from "react";
// import { Link } from "react-router-dom";
import "./style.scss";
import IconBtn from "../../atom/IconBtn/IconBtn";
import Slider from "../../atom/Slider/Slider";
import { useDispatch } from "react-redux";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";
interface IWidgetTimeSelect {
  there?: boolean;
  back?: boolean;
}
const WidgetTimeSelect: FC<IWidgetTimeSelect> = ({ there, back }) => {
  const dispatch = useDispatch();
  const [full, setFull] = useState(false);
  const marks = {
    0: "00:00",
    1440: "24:00",
  };
  const tipFormatter = (val: string) => {
    let hours: number | string = Math.floor(+val / 60);
    let min: number | string = +val - hours * 60;
    if (String(hours).length === 1) {
      hours = `0${hours}`;
    }
    if (String(min).length === 1) {
      min = `0${min}`;
    }
    return `${hours}:${min}`;
  };
  const handelClick = () => {
    setFull((prev) => !prev);
  };
  const onChangeSliderHandler = (value: Array<number>, type: string) => {
    if (there) {
      if (type === "departure") {
        dispatch(actionsFilterRoutes.setStart_departure_hour_to(+value[0]));
        dispatch(actionsFilterRoutes.setStart_departure_hour_from(+value[1]));
      } else if (type === "arrival") {
        dispatch(actionsFilterRoutes.setStart_arrival_hour_to(+value[0]));
        dispatch(actionsFilterRoutes.setStart_arrival_hour_from(+value[1]));
      }
    } else if (back) {
      if (type === "departure") {
        dispatch(actionsFilterRoutes.setEnd_departure_hour_to(+value[0]));
        dispatch(actionsFilterRoutes.setEnd_departure_hour_from(+value[1]));
      } else if (type === "arrival") {
        dispatch(actionsFilterRoutes.setEnd_arrival_hour_to(+value[0]));
        dispatch(actionsFilterRoutes.setEnd_arrival_hour_from(+value[1]));
      }
    }
  };
  return (
    <div className="ThereWidget">
      <div className="ThereWidget__mini ThereWidget-mini">
        <div
          style={back ? { transform: " rotate(180deg)" } : undefined}
          className="ThereWidget-mini__icon icon-arrowR"
        ></div>
        <div className="ThereWidget-mini__text">
          {(there && "Туда") || (back && "Обратно")}
        </div>
        <IconBtn square handelClick={handelClick} active={full} />
      </div>
      {full && (
        <div className="ThereWidget__full ThereWidget-full">
          <div className="ThereWidget-full__departure">
            <div className="title">Время отбытия</div>
            <Slider
              mini
              className="Slider"
              min={0}
              max={1440}
              range
              defaultValue={[0, 660]}
              tooltipVisible
              tooltipPlacement="bottom"
              marks={marks}
              tipFormatter={tipFormatter}
              onAfterChange={(value: Array<number>) => {
                onChangeSliderHandler(value, "departure");
              }}
            />
          </div>
          <div className="ThereWidget-full__arrival">
            <div className="title">Время прибытия</div>
            <Slider
              mini
              className="Slider"
              min={0}
              max={1440}
              range
              defaultValue={[300, 660]}
              tooltipVisible
              tooltipPlacement="bottom"
              marks={marks}
              tipFormatter={tipFormatter}
              onAfterChange={(value: Array<number>) => {
                onChangeSliderHandler(value, "arrival");
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(WidgetTimeSelect);
