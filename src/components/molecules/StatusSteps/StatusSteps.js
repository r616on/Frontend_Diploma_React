import React from "react";
// import { Link } from "react-router-dom";
import "./style.scss";

function StatusSteps() {
  console.log(Math.sqrt(37.5 * 37.5 + 49 * 49));
  return (
    <div className="status-steps">
      <div className="status-steps__background ">
        <div className="status-steps__background-left"></div>
        <div className="status-steps__background-right"></div>
      </div>
      <div className="status-steps__row container">
        <div className="status-steps__item item active">
          <div className="item__icon">1</div>
          <div className="item__text">Билеты</div>
        </div>
        <div className="status-steps__item item">
          <div className="item__icon">2</div>
          <div className="item__text">Пассажиры</div>
        </div>
        {/* <div className="status-steps__item item">
          <div className="item__icon">3</div>
          <div className="item__text">Оплата</div>
        </div>
        <div className="status-steps__item item">
          <div className="item__icon">4</div>
          <div className="item__text">Проверка</div>
        </div> */}
      </div>
    </div>
  );
}

export default StatusSteps;
