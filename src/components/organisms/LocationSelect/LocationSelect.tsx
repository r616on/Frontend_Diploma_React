import React, { FC, useState } from "react";
import { format } from "date-fns";
import "./style.scss";
import ItemTimetablele from "../../atom/ItemTimetablele/ItemTimetableIe";
import Wagon from "../../molecules/Wagon/Wagon";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import { IitemRoutes } from "../Routes/interfaces";
import classNames from "classnames";
import Icon from "../../icon";

const LocationSelect: FC = () => {
  const { First, Fourth, Second, Third } = Icon.wagonType;
  const [classType, setclassType] = useState("");
  console.log(classType);
  const routeCurrent: IitemRoutes = useSelector(
    (state: AppStoreType) => state.CurrentUserData.route
  );
  const items: Array<itemSeatsType> = useSelector(
    (state: AppStoreType) => state.Seats.items
  );
  const handelClassType = (str: string) => {
    setclassType(str);
  };

  return (
    <div className="LocationSelect">
      <div className="LocationSelect__title">Выбор мест </div>
      <div className="LocationSelect__row">
        <div className="LocationSelect__top LocationSelect-top">
          <div className="LocationSelect-top__icon icon-arrowR"></div>
          <div className="LocationSelect-top__another-train">
            Выбрать другой поезд
          </div>
        </div>
        <div className="LocationSelect__ticket LocationSelect-ticket">
          <div className="LocationSelect-ticket__train-info train-info">
            <div className="train-info__icon icon-trainIcon"></div>
            <ul className="train-info__list">
              <li className="train-info__item  train-info__number">
                {routeCurrent.departure?.train?.name}
              </li>
              <li className="train-info__item  train-info__where icon-arrowRMini">
                {routeCurrent.departure?.from?.city?.name}
              </li>

              <li className="train-info__item train-info__finish">
                {routeCurrent.departure?.to?.city?.name}
              </li>
            </ul>
          </div>
          <div className="LocationSelect-ticket__row-time-table">
            <ItemTimetablele
              className={"LocationSelect-ticket__item-time-table"}
              time={routeCurrent.departure?.from?.datetime}
              city={routeCurrent.departure?.from?.city?.name}
              railway={routeCurrent.departure?.from?.railway_station_name}
            />
            <div className="LocationSelect-ticket__arrow icon-arrowR"></div>
            <ItemTimetablele
              className={"LocationSelect-ticket__item-time-table"}
              time={routeCurrent.departure?.to?.datetime}
              city={routeCurrent.departure?.to?.city?.name}
              railway={routeCurrent.departure?.to?.railway_station_name}
            />
          </div>
          <div className="LocationSelect-ticket__length length">
            <div className="length__icon"></div>
            <div className="length__list">
              <div className="length__hour">
                {` ${format(
                  new Date(+`${routeCurrent.departure?.duration}000`),
                  "HH"
                )}  часов`}
              </div>
              <div className="length__minutes">
                {` ${format(
                  new Date(+`${routeCurrent.departure?.duration}000`),
                  "mm"
                )}  минут`}
              </div>
            </div>
          </div>
        </div>
        <div className="LocationSelect__numberOfTickets LocationSelect-number-of-tickets">
          <div className="LocationSelect-number-of-tickets__title">
            Количество билетов
          </div>
          <div className="LocationSelect-number-of-tickets__row">
            <div className="LocationSelect-number-of-tickets__item item adult">
              <div className="item__count"> Взрослых - 2</div>
              <div className="item__description">
                Можно добавить еще 3 пассажиров
              </div>
            </div>
            <div className="LocationSelect-number-of-tickets__item item children">
              <div className="item__count"> Детских - 1</div>
              <div className="item__description">
                Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у
                взрослых, но дешевле в среднем на 50-65%
              </div>
            </div>
            <div className="LocationSelect-number-of-tickets__item item">
              <div className="item__count"> Детских «без места» - 0</div>
              <div className="item__description"></div>
            </div>
          </div>
        </div>
        <div className="LocationSelect__wagonType LocationSelect-wagon-type">
          <div className="LocationSelect-wagon-type__title">Тип вагона</div>
          <div className="LocationSelect-wagon-type__row">
            <div
              className={classNames("item", {
                active: classType === "fourth",
              })}
              onClick={() => handelClassType("fourth")}
            >
              <Fourth fill={classType === "fourth" ? "#ffa800" : "#C4C4C4"} />
              <span className="text">Сидячий</span>
            </div>
            <div
              className={classNames("item", {
                active: classType === "third",
              })}
              onClick={() => handelClassType("third")}
            >
              <Third fill={classType === "third" ? "#ffa800" : "#C4C4C4"} />
              <span className="text">Плацкарт</span>
            </div>
            <div
              className={classNames("item", {
                active: classType === "second",
              })}
              onClick={() => handelClassType("second")}
            >
              <Second fill={classType === "second" ? "#ffa800" : "#C4C4C4"} />
              <span className="text">Купе</span>
            </div>
            <div
              className={classNames("item", {
                active: classType === "first",
              })}
              onClick={() => handelClassType("first")}
            >
              <First fill={classType === "first" ? "#ffa800" : "#C4C4C4"} />
              <span className="text">Люкс</span>
            </div>
          </div>
        </div>

        {items.map((item) => {
          return (
            <Wagon
              key={item.coach._id}
              className="LocationSelect__Wagon"
              coach={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(LocationSelect);
