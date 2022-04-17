import React, { FC } from "react";
import classNames from "classnames";

import "./style.scss";
import Service from "../Service/Service";
import Scheme from "../Scheme/Scheme";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import numberWithSpaces from "../../../utils/numberWithSpaces";
interface IWagon {
  className?: any;
  coach: itemSeatsType;
}
const Wagon: FC<IWagon> = ({ className, coach }) => {
  const randomCoach = Math.floor(Math.random() * 100) + 1;
  return (
    <section
      className={classNames("Wagon", {
        [className]: className,
      })}
    >
      <div className="Wagon__top">
        <div className="Wagon__number">
          Вагоны <span className="active">{randomCoach}</span>
          <span>{randomCoach + 3}</span>
        </div>
        Нумерация вагонов начинается с головы поезда
      </div>
      <div className="Wagon__info Wagon-info">
        <div className="Wagon-info__num">
          {randomCoach}
          <span>вагон</span>
        </div>
        <div className="Wagon-info__table table">
          <div className="table__top table__item">
            <div className="table__item-text">
              Места <span>{coach.coach.available_seats}</span>
            </div>
            <div className="table__item-price">Стоимость</div>
          </div>
          <div className="table__item">
            <div className="table__item-text">
              Верхние
              <span></span>
            </div>
            <div className="table__item-price icon-rub">
              {numberWithSpaces(coach.coach.top_price)}
            </div>
          </div>
          <div className="table__item">
            <div className="table__item-text">
              Нижние
              <span></span>
            </div>
            <div className="table__item-price icon-rub">
              {numberWithSpaces(coach.coach.bottom_price)}
            </div>
          </div>
        </div>
        <Service className="Wagon-info__service" coach={coach.coach} />
      </div>
      <Scheme className="Wagon__scheme" />
    </section>
  );
};

export default React.memo(Wagon);
