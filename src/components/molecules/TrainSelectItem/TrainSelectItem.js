import React from "react";
import ItemTimetablele from "../../atom/ItemTimetablele/ItemTimetableIe";
import ItemTrainOptions from "../../atom/ItemTrainOptions/ItemTrainOptions";
import "./style.scss";

function TrainSelectItem() {
  return (
    <section className="TrainSelect-Item">
      <div className="TrainSelect-Item__row">
        <div className="TrainSelect-Item__Train-name Train-name">
          <div className="Train-name__icon"></div>
          <div className="Train-name__name">020У</div>
          <ul className="Train-name__path">
            <li className="icon-arrowRMini">Москва</li>
            <li className="icon-arrowRMini">Санкт-Петербург</li>
            <li>«Мегаполис»</li>
          </ul>
        </div>
        <div className="TrainSelect-Item__timetable timetable">
          <div className="timetable__row there">
            <ItemTimetablele
              time={"00:41"}
              city={"Москва"}
              railway={"Ленинградский вокзал"}
            />
            <div className="timetable__duration">
              <div className="duration-time">8 : 32</div>
              <div className="there-icon"></div>
            </div>
            <ItemTimetablele
              time={"00:41"}
              city={"Москва"}
              railway={"Ленинградский вокзал"}
            />
          </div>
          <div className="timetable__row back">
            <ItemTimetablele
              time={"00:41"}
              city={"Москва"}
              railway={"Ленинградский вокзал"}
            />
            <div className="timetable__duration reverse">
              <div className="duration-time">8 : 32</div>
              <div className="there-icon"></div>
            </div>
            <ItemTimetablele
              time={"00:41"}
              city={"Москва"}
              railway={"Ленинградский вокзал"}
            />
          </div>
        </div>
        <div className="TrainSelect-Item__Train-options Train-options">
          <div className="Train-options__row">
            <ItemTrainOptions
              className="Train-options__item"
              name={"Сидячий"}
              amount={88}
              price={"1 920"}
            />
            <ItemTrainOptions
              className="Train-options__item"
              name={"Плацкарт"}
              amount={52}
              price={"2 530"}
            />
            <ItemTrainOptions
              className="Train-options__item"
              name={"Купе"}
              amount={24}
              price={"3 820"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainSelectItem;
