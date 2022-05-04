import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import Seat from "../../atom/Seat/Seat";

import "./style.scss";

const fourthClassItem = (i: number, first?: boolean, last?: boolean) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row Sedentary">
      <div className="designations__coupe_row">
        <div className="designations__coupe_side">
          <Seat className="designations__seat" number={i} />
          <Seat className="designations__seat" number={i + 1} />
        </div>
        <div className="designations__coupe_side">
          <Seat className="designations__seat" number={i + 2} />
          <Seat className="designations__seat" number={i + 3} />
        </div>
      </div>
      <div className="designations__coupe_row">
        <div
          className="designations__coupe_side"
          // @ts-ignore: Unreachable code error
          style={first ? { justifyContent: "flex-end" } : null}
        >
          <Seat
            className="designations__seat"
            style={first ? { display: "none" } : null}
            number={i + 32}
          />
          <Seat className="designations__seat" number={i + 33} />
        </div>
        <div
          // @ts-ignore: Unreachable code error
          style={last ? { justifyContent: "flex-end" } : null}
          className="designations__coupe_side"
        >
          <Seat
            className="designations__seat"
            style={last ? { marginBottom: "0" } : null}
            number={i + 34}
          />
          <Seat
            className="designations__seat"
            style={last ? { display: "none" } : null}
            number={i + 35}
          />
        </div>
      </div>
    </div>
  );
};
const fourthClassWagon = () => {
  const arr = [];
  arr.push(fourthClassItem(1, true, false));
  arr.push(fourthClassItem(5));
  arr.push(fourthClassItem(9));
  arr.push(fourthClassItem(13));
  arr.push(fourthClassItem(17));
  arr.push(fourthClassItem(21));
  arr.push(fourthClassItem(25));
  arr.push(fourthClassItem(29, false, true));
  return arr;
};

interface ISchemeFourthClass {
  className?: any;
}
const SchemeFourthClass: FC<ISchemeFourthClass> = () => {
  return (
    <div className="Scheme__block">
      <div className="Scheme__img Sedentary"></div>
      <div className="Scheme__designations designations ">
        <div className="designations__wagon-number">22</div>
        <div className="designations__row">
          {fourthClassWagon().map((item) => item)}
        </div>
      </div>
    </div>
  );
};

export default SchemeFourthClass;
