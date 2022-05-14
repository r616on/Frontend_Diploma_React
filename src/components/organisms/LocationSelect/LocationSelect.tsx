import React, { FC, useState } from "react";
import { format } from "date-fns";
import "./style.scss";
import ItemTimetablele from "../../atom/ItemTimetablele/ItemTimetableIe";
import Wagon from "../../molecules/Wagon/Wagon";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import { IitemRoutes } from "../Routes/interfaces";
import classNames from "classnames";
import Icon from "../../icon";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";
import numberWithSpaces from "../../../utils/numberWithSpaces";
import Button from "../../atom/Button/Button";
import { useNavigate } from "react-router-dom";
import { InputNumber } from "antd";

const LocationSelect: FC = () => {
  const navigate = useNavigate();
  const { Rub } = Icon.other;
  const { First, Fourth, Second, Third } = Icon.wagonType;
  const dispatch = useDispatch();
  const [selectedClassType, setSelectedClassType] = useState("");
  const [selectedAdultSeat, setSelectedAdultSeat] = useState([]);
  const [selectedChildSeat, setSelectedChildSeat] = useState([]);
  const [selectedTypePasenger, setSelectedTypePasenger] = useState("adult");
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const routeCurrent: IitemRoutes = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo.route
  );
  const items: Array<itemSeatsType> = useSelector(
    (state: AppStoreType) => state.Seats.items
  );
  const firstArr = items.filter((item) => item.coach.class_type === "first");
  const secondArr = items.filter((item) => item.coach.class_type === "second");
  const thirdArr = items.filter((item) => item.coach.class_type === "third");
  const fourthArr = items.filter((item) => item.coach.class_type === "fourth");

  const vagonName = items
    .filter((item) => item.coach.class_type === selectedClassType)
    .map((item) => item.coach.name.replace(/[^\d]/g, ""));
  const price =
    selectedAdultSeat.reduce(
      (sum, item: { id: string; number: number; price: number }) =>
        sum + +item.price,
      0
    ) +
    selectedChildSeat.reduce(
      (sum, item: { id: string; number: number; price: number }) =>
        sum + +item.price,
      0
    );
  const handelClassType = (str: string) => {
    const arrClass = items.filter((item) => item.coach.class_type === str);
    if (arrClass.length > 0) {
      setSelectedClassType(str);
    }
  };
  const hendlerNext = () => {
    if (selectedAdultSeat.length > 0) {
      dispatch(actCurrentUserInfo.setSeatsAdult(selectedAdultSeat));
      dispatch(actCurrentUserInfo.setSeatsChild(selectedChildSeat));
      dispatch(actCurrentUserInfo.setPrice(price));
      navigate("/fillingDocuments");
    }
  };
  const hendlerCount = (value: any, type: string) => {
    if (type === "adult") {
      setAdultCount(value);
    } else if (type === "child") {
      setChildCount(value);
    }
  };
  const handlerTypePasenger = (typePasanger: string) => {
    setSelectedTypePasenger(typePasanger);
  };
  return (
    <>
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
              <div
                className={classNames(
                  "LocationSelect-number-of-tickets__item item",
                  {
                    active: selectedTypePasenger === "adult",
                  }
                )}
                onClick={() => handlerTypePasenger("adult")}
              >
                <div className="item__count">
                  Взрослых <span>-</span>
                  <InputNumber
                    min={1}
                    max={5}
                    defaultValue={1}
                    onChange={(value) => hendlerCount(value, "adult")}
                    className="item__count-counter"
                  />
                </div>
                {adultCount - selectedAdultSeat.length > 0 && (
                  <div className="item__description">
                    Можно добавить еще
                    {` : ${adultCount - selectedAdultSeat.length} `}
                    пассажиров
                  </div>
                )}
              </div>
              <div
                className={classNames(
                  "LocationSelect-number-of-tickets__item item",
                  {
                    active: selectedTypePasenger === "child",
                  }
                )}
                onClick={() => handlerTypePasenger("child")}
              >
                <div className="item__count">
                  Детских <span>-</span>
                  <InputNumber
                    min={0}
                    max={4}
                    defaultValue={0}
                    onChange={(value) => hendlerCount(value, "child")}
                    className="item__count-counter"
                  />
                </div>
                {childCount - selectedChildSeat.length > 0 && (
                  <div className="item__description">
                    Можно добавить еще
                    {` ${childCount - selectedChildSeat.length} `}
                    детей до 10 лет.Свое место в вагоне, как у взрослых, но
                    дешевле в среднем на 50-65%
                  </div>
                )}
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
                  active: selectedClassType === "fourth",
                  available: fourthArr.length > 0,
                })}
                onClick={() => handelClassType("fourth")}
              >
                <Fourth
                  fill={selectedClassType === "fourth" ? "#ffa800" : "#C4C4C4"}
                />
                <span className="text">Сидячий</span>
              </div>
              <div
                className={classNames("item", {
                  active: selectedClassType === "third",
                  available: thirdArr.length > 0,
                })}
                onClick={() => handelClassType("third")}
              >
                <Third
                  fill={selectedClassType === "third" ? "#ffa800" : "#C4C4C4"}
                />
                <span className="text">Плацкарт</span>
              </div>
              <div
                className={classNames("item", {
                  active: selectedClassType === "second",
                  available: secondArr.length > 0,
                })}
                onClick={() => handelClassType("second")}
              >
                <Second
                  fill={selectedClassType === "second" ? "#ffa800" : "#C4C4C4"}
                />
                <span className="text">Купе</span>
              </div>
              <div
                className={classNames("item", {
                  active: selectedClassType === "first",
                  available: firstArr.length > 0,
                })}
                onClick={() => handelClassType("first")}
              >
                <First
                  fill={selectedClassType === "first" ? "#ffa800" : "#C4C4C4"}
                />
                <span className="text">Люкс</span>
              </div>
            </div>
          </div>
          <div className="LocationSelect__Wagon-row">
            {selectedClassType &&
              items
                .filter((item) => item.coach.class_type === selectedClassType)
                .map((item) => {
                  return (
                    <Wagon
                      selectedClassType={selectedClassType}
                      vagonName={vagonName}
                      key={item.coach._id}
                      className="LocationSelect__Wagon"
                      coach={item}
                      selectedAdultSeat={selectedAdultSeat}
                      setSelectedAdultSeat={setSelectedAdultSeat}
                      selectedChildSeat={selectedChildSeat}
                      setSelectedChildSeat={setSelectedChildSeat}
                      selectedTypePasenger={selectedTypePasenger}
                      adultCount={adultCount}
                      childCount={childCount}
                    />
                  );
                })}
          </div>
          {price > 0 && (
            <div className="LocationSelect__bottom">
              <div className="LocationSelect__bottom-price">
                <span className="number">{numberWithSpaces(price)}</span>
                <Rub />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="LocationSelect-controls">
        <Button
          type="next"
          handler={hendlerNext}
          className="LocationSelect-Next"
        />
      </div>
    </>
  );
};

export default React.memo(LocationSelect);
