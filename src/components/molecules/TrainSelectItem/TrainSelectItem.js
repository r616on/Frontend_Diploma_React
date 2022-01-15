import React from "react";
import "./style.scss";

function TrainSelectItem() {
  return (
    <section className="TrainSelect-Item">
      <div className="TrainSelect-Item__row">
        <div className="TrainSelect-Item__Train-name Train-name">
          <div className="Train-name__icon"></div>
          <div className="Train-name__name">020У</div>
          <div className="Train-name__path">
            Москва → Санкт-Петербург «Мегаполис»
          </div>
        </div>
        <div className="TrainSelect-Item__timetable timetable">
          <div className="timetable__there">
            <div className="timetable__item">
              <div className="timetable__time">00:41</div>
              <div className="timetable__city">
                <div className="timetable__city-name">Москва</div>
                <div className="timetable__railway-station">
                  Ленинградский вокзал
                </div>
              </div>
            </div>
            <div className="timetable__duration">
              <div className="duration-time">8 : 32</div>
              <div className="there-icon"></div>
            </div>
            <div className="timetable__item">
              <div className="timetable__time">00:41</div>
              <div className="timetable__city">
                <div className="timetable__city-name">Москва</div>
                <div className="timetable__railway-station">
                  Ленинградский вокзал
                </div>
              </div>
            </div>
          </div>
          <div className="timetable__back"></div>
        </div>
        <div className="TrainSelect-Item__Train-options">
          <div className="Train-options__row">
            <div className="Train-options-item">
              <div className="Train-options-item__name">Купе</div>
              <div className="Train-options-item__amount">90</div>
              <div className="Train-options-price">3 950</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainSelectItem;
