import React from "react";
import classNames from "classnames";

import "./style.scss";
import Service from "../Service/Service";
import Scheme from "../Scheme/Scheme";

function Wagon({ className }) {
  return (
    <section
      className={classNames("Wagon", {
        [className]: className,
      })}
    >
      <div className="Wagon__top">
        <div className="Wagon__number">
          Вагоны <span className="active">07</span>
          <span>09</span>
        </div>
        Нумерация вагонов начинается с головы поезда
      </div>
      <div className="Wagon__info Wagon-info">
        <div className="Wagon-info__num">
          07<span>вагон</span>
        </div>
        <div className="Wagon-info__table table">
          <div className="table__top table__item">
            <div className="table__item-text">
              Места <span>11</span>
            </div>
            <div className="table__item-price">Стоимость</div>
          </div>
          <div className="table__item">
            <div className="table__item-text">
              Верхние
              <span>3</span>
            </div>
            <div className="table__item-price icon-rub">2 920</div>
          </div>
          <div className="table__item">
            <div className="table__item-text">
              Нижние
              <span>8</span>
            </div>
            <div className="table__item-price icon-rub">3 530</div>
          </div>
        </div>
        <Service className="Wagon-info__service" />
      </div>
      <Scheme className="Wagon__scheme" />
    </section>
  );
}

export default Wagon;
