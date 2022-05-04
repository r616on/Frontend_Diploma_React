import React, { FC } from "react";
import classNames from "classnames";

interface ISeat {
  className: any;
  style?: any;
  number: number;
}
const Seat: FC<ISeat> = ({ className, style, number }) => {
  return (
    <div
      className={classNames("SeatItem", { [className]: className })}
      style={style ? style : null}
    >
      {number}
    </div>
  );
};

export default Seat;
