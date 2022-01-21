import React from "react";
import classNames from "classnames";
import "./style.scss";
import ItemTimetablele from "../../atom/ItemTimetablele/ItemTimetableIe";

function ChairSelect({ className }) {
  return (
    <div className="ChairSelect">
      <div className="ChairSelect__title">Выбор мест </div>
      <div className="ChairSelect__row">
        <div className="ChairSelect__top ChairSelect-top">
          <div className="ChairSelect-top__icon icon-arrowR"></div>
          <div className="ChairSelect-top__another-train">
            Выбрать другой поезд
          </div>
        </div>
        <div className="ChairSelect__ticket ChairSelect-ticket">
          <div className="ChairSelect-ticket__train-info train-info">
            <div className="train-info__icon icon-trainIcon"></div>
            <ul className="train-info__list">
              <li className="train-info__item  train-info__number">11bC</li>
              <li className="train-info__item  train-info__where icon-arrowRMini">
                Адлер
              </li>
              <li className="train-info__item icon-arrowRMini">Москва</li>
              <li className="train-info__item train-info__finish">
                Санкт-Петербург
              </li>
            </ul>
          </div>
          <div className="ChairSelect-ticket__row-time-table">
            <ItemTimetablele
              className={"ChairSelect-ticket__item-time-table"}
              time={"00:10"}
              city={"Москва"}
              railway={"Курский вокзал"}
            />
            <div className="ChairSelect-ticket__arrow icon-arrowR"></div>
            <ItemTimetablele
              className={"ChairSelect-ticket__item-time-table"}
              time={"09:52"}
              city={"Санкт-Петербург"}
              railway={"Ладожский вокзал"}
            />
          </div>
          <div className="ChairSelect-ticket__length length">
            <div className="length__icon"></div>
            <div className="length__list">
              <div className="length__hour">9 часов</div>
              <div className="length__minutes">42 минуты</div>
            </div>
          </div>
        </div>
        <div className="ChairSelect__numberOfTickets ChairSelect-number-of-tickets"></div>
        <div className="ChairSelect__wagonType ChairSelect-wagon-type"></div>
      </div>
    </div>
  );
}

export default ChairSelect;
