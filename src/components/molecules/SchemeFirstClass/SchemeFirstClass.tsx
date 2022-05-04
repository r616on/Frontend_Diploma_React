import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import Seat from "../../atom/Seat/Seat";

const firstClassItem = (i: number) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row Luxe">
      <div className="designations__coupe_side">
        <Seat className="designations__seat" number={i} />
      </div>
      <div className="designations__coupe_side">
        <Seat className="designations__seat" number={i + 1} />
      </div>
    </div>
  );
};

const createWagon = () => {
  const arr = [];
  arr.push(firstClassItem(1));
  arr.push(firstClassItem(3));
  arr.push(firstClassItem(5));
  arr.push(firstClassItem(7));
  arr.push(firstClassItem(9));
  arr.push(firstClassItem(11));
  arr.push(firstClassItem(13));
  arr.push(firstClassItem(15));
  return arr;
};

interface IScheme {
  className?: any;
}
const SchemeFirstClass: FC<IScheme> = () => {
  return (
    <div className="Scheme__block">
      <div className="Scheme__img coupe"></div>
      <div className="Scheme__designations designations ">
        <div className="designations__wagon-number">22</div>
        <div className="designations__row">
          {createWagon().map((item) => item)}
        </div>
      </div>
    </div>
  );
};

export default SchemeFirstClass;
