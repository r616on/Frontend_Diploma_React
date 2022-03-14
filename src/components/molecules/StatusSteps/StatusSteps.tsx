import React, { FC } from "react";
// import { Link } from "react-router-dom";
import classNames from "classnames";
import "./style.scss";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";

interface Iprops {}
const StatusSteps: FC<Iprops> = () => {
  const step = useSelector((state: AppStoreType) => state.AppStatus.step);
  return (
    <div className="status-steps">
      <div className="status-steps__background ">
        <div className="status-steps__background-left"></div>
        <div
          className="status-steps__background-right"
          style={step > 3 ? { backgroundColor: "#ffa800" } : {}}
        ></div>
      </div>
      <div className="status-steps__row container">
        <div
          className={classNames("status-steps__item item", {
            active: step >= 1,
            previous: step > 1,
          })}
        >
          <div className="item__icon">1</div>
          <div className="item__text">Билеты</div>
        </div>
        <div
          className={classNames("status-steps__item item", {
            active: step > 1,
            previous: step > 2,
          })}
        >
          <div className="item__icon">2</div>
          <div className="item__text">Пассажиры</div>
        </div>
        <div
          className={classNames("status-steps__item item", {
            active: step > 2,
            previous: step > 3,
          })}
        >
          <div className="item__icon">3</div>
          <div className="item__text">Оплата</div>
        </div>
        <div
          className={classNames("status-steps__item item", {
            active: step > 3,
            previous: step > 4,
          })}
        >
          <div className="item__icon">4</div>
          <div className="item__text">Проверка</div>
        </div>
      </div>
    </div>
  );
};

export default StatusSteps;
