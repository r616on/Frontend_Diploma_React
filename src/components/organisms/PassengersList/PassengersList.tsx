import React, { FC } from "react";
import classNames from "classnames";
import "./style.scss";
import PassengerCard from "../../molecules/PassengerCard/PassengerCard";
import { AppStoreType } from "../../../store/interfaces";
import { useSelector } from "react-redux";

interface IPassengersList {
  className?: any;
}

const PassengersList: FC<IPassengersList> = ({ className }) => {
  const { seatsAdult, seatsChild } = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo
  );

  return (
    <section
      className={classNames("PassengersList", {
        [className]: className,
      })}
    >
      <div className="PassengersList__row">
        {seatsAdult &&
          seatsAdult.length > 0 &&
          seatsAdult.map((item, index) => {
            return (
              <PassengerCard
                age="adult"
                isClosed={index === 0 ? false : true}
                key={item.id + item.number}
                id={item.id}
                price={item.price}
                numberSeats={item.number}
                numberPasenger={+index + 1}
              />
            );
          })}
        {seatsAdult &&
          seatsChild &&
          seatsChild.length > 0 &&
          seatsChild.map((item, index) => {
            return (
              <PassengerCard
                age="child"
                isClosed={true}
                key={item.id + item.number}
                id={item.id}
                price={item.price}
                numberSeats={item.number}
                numberPasenger={seatsAdult.length + index + 1}
              />
            );
          })}
      </div>
    </section>
  );
};

export default React.memo(PassengersList);
