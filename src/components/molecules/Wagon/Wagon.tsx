import React, { FC } from "react";
import classNames from "classnames";

import "./style.scss";
import Service from "../Service/Service";
import Scheme from "../Scheme/Scheme";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import numberWithSpaces from "../../../utils/numberWithSpaces";
interface IWagon {
  className?: any;
  vagonName: Array<string>;
  selectedClassType: string;
  coach: itemSeatsType;
  selectedSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedSeat: Function;
}
const Wagon: FC<IWagon> = ({
  className,
  selectedClassType,
  vagonName,
  coach,
  selectedSeat,
  setSelectedSeat,
}) => {
  const name = parseInt(coach.coach.name.replace(/[^\d]/g, ""));
  return (
    <section
      className={classNames("Wagon", {
        [className]: className,
      })}
    >
      <div className="Wagon__top">
        <div className="Wagon__number">
          Вагоны: <span className="active">{name} </span>
          <span>{vagonName.filter((item) => +item !== name).join(" ")}</span>
        </div>
        Нумерация вагонов начинается с головы поезда
      </div>
      <div className="Wagon__info Wagon-info">
        <div className="Wagon-info__num">
          {name}
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
            {selectedClassType === "thrid" && (
              <>
                <div className="table__item-text">
                  Верхние
                  <span></span>
                </div>
                <div className="table__item-price icon-rub">
                  {numberWithSpaces(coach.coach.top_price)}
                </div>
              </>
            )}
          </div>
          <div className="table__item">
            <div className="table__item-text">
              {selectedClassType === "thrid" ? "Нижние" : ""}
              <span></span>
            </div>
            <div className="table__item-price icon-rub">
              {numberWithSpaces(coach.coach.bottom_price)}
            </div>
          </div>
        </div>
        <Service className="Wagon-info__service" coach={coach.coach} />
      </div>
      <Scheme
        selectedClassType={selectedClassType}
        className="Wagon__scheme"
        coach={coach}
        selectedSeat={selectedSeat}
        setSelectedSeat={setSelectedSeat}
      />
    </section>
  );
};

export default React.memo(Wagon);
