import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import Seat from "../../atom/Seat/Seat";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
const secondClassItem = (
  i: number,
  coach: itemSeatsType,
  selectedSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedSeat: Function
) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row coupe">
      <div className="designations__coupe_side">
        <Seat
          className="designations__seat"
          number={i}
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
        <Seat
          className="designations__seat top"
          number={i + 1}
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
      </div>
      <div className="designations__coupe_side">
        <Seat
          className="designations__seat"
          number={i + 2}
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
        <Seat
          className="designations__seat top"
          number={i + 3}
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
      </div>
    </div>
  );
};

const secondClassWagon = (
  coach: itemSeatsType,
  selectedSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedSeat: Function
) => {
  const arr = [];
  arr.push(secondClassItem(1, coach, selectedSeat, setSelectedSeat));
  arr.push(secondClassItem(5, coach, selectedSeat, setSelectedSeat));
  arr.push(secondClassItem(9, coach, selectedSeat, setSelectedSeat));
  arr.push(secondClassItem(13, coach, selectedSeat, setSelectedSeat));
  arr.push(secondClassItem(17, coach, selectedSeat, setSelectedSeat));
  arr.push(secondClassItem(21, coach, selectedSeat, setSelectedSeat));
  arr.push(secondClassItem(25, coach, selectedSeat, setSelectedSeat));
  arr.push(secondClassItem(29, coach, selectedSeat, setSelectedSeat));
  return arr;
};

interface ISchemeSecondClass {
  className?: any;
  coach: itemSeatsType;
  selectedSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedSeat: Function;
}
const SchemeSecondClass: FC<ISchemeSecondClass> = ({
  coach,
  selectedSeat,
  setSelectedSeat,
}) => {
  return (
    <div className="Scheme__block">
      <div className="Scheme__img coupe"></div>
      <div className="Scheme__designations designations ">
        <div className="designations__wagon-number">
          {parseInt(coach.coach.name.replace(/[^\d]/g, ""))}
        </div>
        <div className="designations__row">
          {secondClassWagon(coach, selectedSeat, setSelectedSeat).map(
            (item) => item
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeSecondClass;
