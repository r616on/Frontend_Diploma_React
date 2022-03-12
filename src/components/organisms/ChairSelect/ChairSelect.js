import React from "react";

import "./style.scss";
import ItemTimetablele from "../../atom/ItemTimetablele/ItemTimetableIe";
import Wagon from "../../molecules/Wagon/Wagon";

function ChairSelect() {
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
        <div className="ChairSelect__numberOfTickets ChairSelect-number-of-tickets">
          <div className="ChairSelect-number-of-tickets__title">
            Количество билетов
          </div>
          <div className="ChairSelect-number-of-tickets__row">
            <div className="ChairSelect-number-of-tickets__item item adult">
              <div className="item__count"> Взрослых - 2</div>
              <div className="item__description">
                Можно добавить еще 3 пассажиров
              </div>
            </div>
            <div className="ChairSelect-number-of-tickets__item item children">
              <div className="item__count"> Детских - 1</div>
              <div className="item__description">
                Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у
                взрослых, но дешевле в среднем на 50-65%
              </div>
            </div>
            <div className="ChairSelect-number-of-tickets__item item">
              <div className="item__count"> Детских «без места» - 0</div>
              <div className="item__description"></div>
            </div>
          </div>
        </div>
        <div className="ChairSelect__wagonType ChairSelect-wagon-type">
          <div className="ChairSelect-wagon-type__title">Тип вагона</div>
          <div className="ChairSelect-wagon-type__row">
            <div className="item sedentart">Сидячий</div>
            <div className="item reservedSeat">Плацкарт</div>
            <div className="item coupe">Купе</div>
            <div className="item luxury">Люкс</div>
          </div>
        </div>

        <Wagon className="ChairSelect__Wagon" />
      </div>
    </div>
  );
}

export default ChairSelect;
