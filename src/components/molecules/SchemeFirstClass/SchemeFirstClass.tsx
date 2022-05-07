import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import Seat from "../../atom/Seat/Seat";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";

const firstClassItem = (
  i: number,
  coach: itemSeatsType,
  selectedSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedSeat: Function
) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row Luxe">
      <div className="designations__coupe_side">
        <Seat
          className="designations__seat"
          number={i}
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
      </div>
      <div className="designations__coupe_side">
        <Seat
          className="designations__seat"
          number={i + 1}
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
      </div>
    </div>
  );
};

const createWagon = (
  coach: itemSeatsType,
  selectedSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedSeat: Function
) => {
  const arr = [];
  arr.push(firstClassItem(1, coach, selectedSeat, setSelectedSeat));
  arr.push(firstClassItem(3, coach, selectedSeat, setSelectedSeat));
  arr.push(firstClassItem(5, coach, selectedSeat, setSelectedSeat));
  arr.push(firstClassItem(7, coach, selectedSeat, setSelectedSeat));
  arr.push(firstClassItem(9, coach, selectedSeat, setSelectedSeat));
  arr.push(firstClassItem(11, coach, selectedSeat, setSelectedSeat));
  arr.push(firstClassItem(13, coach, selectedSeat, setSelectedSeat));
  arr.push(firstClassItem(15, coach, selectedSeat, setSelectedSeat));
  return arr;
};

interface IScheme {
  className?: any;
  coach: itemSeatsType;
  selectedSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedSeat: Function;
}
const SchemeFirstClass: FC<IScheme> = ({
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
          {createWagon(coach, selectedSeat, setSelectedSeat).map(
            (item) => item
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeFirstClass;
