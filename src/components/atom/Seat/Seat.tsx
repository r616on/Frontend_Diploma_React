import React, { FC } from "react";
import classNames from "classnames";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

interface ISeat {
  className: any;
  style?: any;
  number: number;
  coach: itemSeatsType;
  selectedAdultSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedAdultSeat: Function;
  selectedChildSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedChildSeat: Function;
  adultCount: number;
  childCount: number;
  selectedTypePasenger: string;
}
const Seat: FC<ISeat> = ({
  className,
  style,
  number,
  coach,
  selectedAdultSeat,
  setSelectedAdultSeat,
  selectedChildSeat,
  setSelectedChildSeat,
  adultCount,
  childCount,
  selectedTypePasenger,
}) => {
  const available = coach.seats.find(
    (item) => item.index === number && item.available
  );
  const uidd = uuidv4();

  // (selectedAdultSeat.length < adultCount ||
  //   selectedChildSeat.length < childCount);

  const handelClick = (number: number, id: string, price: number) => {
    if (selectedTypePasenger === "adult") {
      const index = selectedAdultSeat.findIndex(
        (item) => item.id === id && item.number === number
      );
      if (available && index < 0 && selectedAdultSeat.length < adultCount) {
        setSelectedAdultSeat((prev: any) => {
          const arr = [...prev];
          arr.push({ id, uidd, number, price });
          return arr;
        });
      } else if (available && index > -1) {
        setSelectedAdultSeat((prev: any) => {
          const arr = [...prev];
          arr.splice(index, 1);
          return arr;
        });
      }
    } else if (selectedTypePasenger === "child") {
      const index = selectedChildSeat.findIndex(
        (item) => item.id === id && item.number === number
      );
      if (available && index < 0 && selectedChildSeat.length < childCount) {
        setSelectedChildSeat((prev: any) => {
          const arr = [...prev];
          arr.push({
            id,
            uidd,
            number,
            price: Math.round(price / 2),
          });
          return arr;
        });
      } else if (available && index > -1) {
        setSelectedChildSeat((prev: any) => {
          const arr = [...prev];
          arr.splice(index, 1);
          return arr;
        });
      }
    }
  };
  let select: any;
  if (selectedTypePasenger === "adult") {
    select = selectedAdultSeat.find(
      (item) => item.id === coach.coach._id && item.number === number
    );
  } else {
    select = selectedChildSeat.find(
      (item) => item.id === coach.coach._id && item.number === number
    );
  }

  return (
    <div
      className={classNames("SeatItem", {
        [className]: className,
        available: available,
        select,
      })}
      style={style ? style : null}
      onClick={() =>
        handelClick(number, coach.coach._id, coach.coach.bottom_price)
      }
    >
      {number}
    </div>
  );
};

export default Seat;
