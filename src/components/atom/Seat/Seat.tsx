import React, { FC } from "react";
import classNames from "classnames";
import { Iseats, itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import "./style.scss";

interface ISeat {
  className: any;
  style?: any;
  number: number;
  coach: itemSeatsType;
  selectedSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedSeat: Function;
}
const Seat: FC<ISeat> = ({
  className,
  style,
  number,
  coach,
  selectedSeat,
  setSelectedSeat,
}) => {
  const available = coach.seats.find(
    (item) => item.index === number && item.available
  );
  const handelClick = (number: number, id: string, price: number) => {
    const index = selectedSeat.findIndex(
      (item) => item.id === id && item.number === number
    );
    if (available && index < 0) {
      setSelectedSeat((prev: any) => {
        const arr = [...prev];
        arr.push({ id, number, price });
        return arr;
      });
    } else if (available && index > -1) {
      setSelectedSeat((prev: any) => {
        const arr = [...prev];
        arr.splice(index, 1);
        return arr;
      });
    }
  };
  const select = selectedSeat.find(
    (item) => item.id === coach.coach._id && item.number === number
  );
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
