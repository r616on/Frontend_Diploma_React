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
  const { seatsAdult, seatsChild, passengerFullInfo } = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo
  );

  return (
    <section
      className={classNames("PassengersList", {
        [className]: className,
      })}
    >
      {passengerFullInfo.length === 0 && (
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
                  uidd={item.uidd}
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
                  uidd={item.uidd}
                  price={item.price}
                  numberSeats={item.number}
                  numberPasenger={seatsAdult.length + index + 1}
                />
              );
            })}
        </div>
      )}

      {passengerFullInfo.length > 0 && (
        <div className="PassengersList__row">
          {passengerFullInfo.map((item, index) => {
            return (
              <PassengerCard
                age={item.age}
                isClosed={false}
                key={item.uidd}
                id={item.id}
                uidd={item.uidd}
                price={item.price}
                numberSeats={item.numberSeats}
                numberPasenger={index + 1}
                inName={item.name}
                inSurname={item.surname}
                inSex={item.sex}
                inBirthday={item.birthday}
                inRestriction={item.restriction}
                inTypeDoc={item.document}
                inPart={item.part}
                inPassportSeries={item.passportSeries}
                inPassportNumber={item.passportNumber}
                inBirthCertificate={item.birthCertificate}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default React.memo(PassengersList);
