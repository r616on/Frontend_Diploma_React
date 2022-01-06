import React from "react";
// import { Link } from "react-router-dom";
import "./style.scss";

function HowItWorks() {
  return (
    <section className="howItWorks">
      <div className="howItWorks__row-top container">
        <h2 className="howItWorks__title title">Как это работает</h2>
        <button className="howItWorks__button">Узнать больше</button>
      </div>
      <div className="howItWorks__row-bottom container">
        <div className="howItWorks__item item">
          <div className="item__icon convenientOrder"></div>
          <div className="item__text">Удобный заказ на сайте</div>
        </div>
        <div className="howItWorks__item item">
          <div className="item__icon dontOffice"></div>
          <div className="item__text">Нет необходимости ехать в офис</div>
        </div>
        <div className="howItWorks__item item">
          <div className="item__icon hugeSelection"></div>
          <div className="item__text">Огромный выбор направлений</div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
