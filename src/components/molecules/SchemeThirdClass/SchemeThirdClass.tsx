import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import Seat from "../../atom/Seat/Seat";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";

const thirdClassItem = (
  i: number,
  b: number,
  coach: itemSeatsType,
  selectedSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedSeat: Function
) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row ReservedSeat">
      <div className="row">
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
      <div className="designations__coupe_bottom">
        <Seat
          className="designations__seat"
          number={b + 31}
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
        <Seat
          className="designations__seat"
          number={b + 32}
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
  arr.push(thirdClassItem(1, 1, coach, selectedSeat, setSelectedSeat));
  arr.push(thirdClassItem(5, 3, coach, selectedSeat, setSelectedSeat));
  arr.push(thirdClassItem(9, 5, coach, selectedSeat, setSelectedSeat));
  arr.push(thirdClassItem(13, 7, coach, selectedSeat, setSelectedSeat));
  arr.push(thirdClassItem(17, 9, coach, selectedSeat, setSelectedSeat));
  arr.push(thirdClassItem(21, 11, coach, selectedSeat, setSelectedSeat));
  arr.push(thirdClassItem(24, 13, coach, selectedSeat, setSelectedSeat));
  arr.push(thirdClassItem(28, 15, coach, selectedSeat, setSelectedSeat));
  return arr;
};

interface IScheme {
  className?: any;
  coach: itemSeatsType;
  selectedSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedSeat: Function;
}
const SchemeThirdClass: FC<IScheme> = ({
  coach,
  selectedSeat,
  setSelectedSeat,
}) => {
  return (
    <div className="Scheme__block">
      <div className="Scheme__img ReservedSeat"></div>
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

export default SchemeThirdClass;
