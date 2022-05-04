import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import Seat from "../../atom/Seat/Seat";

const thirdClassItem = (i: number) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row ReservedSeat">
      <div className="row">
        <div className="designations__coupe_side">
          <Seat className="designations__seat" number={i} />
          <Seat className="designations__seat top" number={i + 1} />
        </div>
        <div className="designations__coupe_side">
          <Seat className="designations__seat" number={i + 2} />
          <Seat className="designations__seat top" number={i + 3} />
        </div>
      </div>
      <div className="designations__coupe_bottom">
        <Seat className="designations__seat" number={i - 4 + 33} />
        <Seat className="designations__seat" number={i - 4 + 34} />
      </div>
    </div>
  );
};
const createWagon = () => {
  const arr = [];
  arr.push(thirdClassItem(1));
  arr.push(thirdClassItem(5));
  arr.push(thirdClassItem(9));
  arr.push(thirdClassItem(13));
  arr.push(thirdClassItem(17));
  arr.push(thirdClassItem(21));
  arr.push(thirdClassItem(24));
  arr.push(thirdClassItem(28));
  return arr;
};

interface IScheme {
  className?: any;
}
const SchemeThirdClass: FC<IScheme> = () => {
  return (
    <div className="Scheme__block">
      <div className="Scheme__img ReservedSeat"></div>
      <div className="Scheme__designations designations ">
        <div className="designations__wagon-number">22</div>
        <div className="designations__row">
          {createWagon().map((item) => item)}
        </div>
      </div>
    </div>
  );
};

export default SchemeThirdClass;
