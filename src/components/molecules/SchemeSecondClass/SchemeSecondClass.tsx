import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import Seat from "../../atom/Seat/Seat";
const secondClassItem = (i: number) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row coupe">
      <div className="designations__coupe_side">
        <Seat className="designations__seat" number={i} />
        <Seat className="designations__seat top" number={i + 1} />
      </div>
      <div className="designations__coupe_side">
        <Seat className="designations__seat" number={i + 2} />
        <Seat className="designations__seat top" number={i + 3} />
      </div>
    </div>
  );
};

const secondClassWagon = () => {
  const arr = [];
  arr.push(secondClassItem(1));
  arr.push(secondClassItem(5));
  arr.push(secondClassItem(9));
  arr.push(secondClassItem(13));
  arr.push(secondClassItem(17));
  arr.push(secondClassItem(21));
  arr.push(secondClassItem(25));
  arr.push(secondClassItem(29));
  return arr;
};

interface ISchemeSecondClass {
  className?: any;
}
const SchemeSecondClass: FC<ISchemeSecondClass> = () => {
  return (
    <div className="Scheme__block">
      <div className="Scheme__img coupe"></div>
      <div className="Scheme__designations designations ">
        <div className="designations__wagon-number">22</div>
        <div className="designations__row">
          {secondClassWagon().map((item) => item)}
        </div>
      </div>
    </div>
  );
};

export default SchemeSecondClass;
