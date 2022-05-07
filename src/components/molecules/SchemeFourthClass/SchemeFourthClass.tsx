import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import Seat from "../../atom/Seat/Seat";

import "./style.scss";

const fourthClassItem = (
  i: number,
  coach: itemSeatsType,
  selectedSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedSeat: Function,
  first?: boolean,
  last?: boolean
) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row Sedentary">
      <div className="designations__coupe_row">
        <div className="designations__coupe_side">
          <Seat
            className="designations__seat"
            number={i}
            coach={coach}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
          />
          <Seat
            className="designations__seat"
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
            className="designations__seat"
            number={i + 3}
            coach={coach}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
          />
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
            coach={coach}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
          />
          <Seat
            className="designations__seat"
            number={i + 33}
            coach={coach}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
          />
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
            coach={coach}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
          />
          <Seat
            className="designations__seat"
            style={last ? { display: "none" } : null}
            number={i + 35}
            coach={coach}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
          />
        </div>
      </div>
    </div>
  );
};
const fourthClassWagon = (
  coach: itemSeatsType,
  selectedSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedSeat: Function
) => {
  const arr = [];
  arr.push(
    fourthClassItem(1, coach, selectedSeat, setSelectedSeat, true, false)
  );
  arr.push(fourthClassItem(5, coach, selectedSeat, setSelectedSeat));
  arr.push(fourthClassItem(9, coach, selectedSeat, setSelectedSeat));
  arr.push(fourthClassItem(13, coach, selectedSeat, setSelectedSeat));
  arr.push(fourthClassItem(17, coach, selectedSeat, setSelectedSeat));
  arr.push(fourthClassItem(21, coach, selectedSeat, setSelectedSeat));
  arr.push(fourthClassItem(25, coach, selectedSeat, setSelectedSeat));
  arr.push(
    fourthClassItem(29, coach, selectedSeat, setSelectedSeat, false, true)
  );
  return arr;
};

interface ISchemeFourthClass {
  className?: any;
  coach: itemSeatsType;
  selectedSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedSeat: Function;
}
const SchemeFourthClass: FC<ISchemeFourthClass> = ({
  coach,
  selectedSeat,
  setSelectedSeat,
}) => {
  return (
    <div className="Scheme__block">
      <div className="Scheme__img Sedentary"></div>
      <div className="Scheme__designations designations ">
        <div className="designations__wagon-number">
          {parseInt(coach.coach.name.replace(/[^\d]/g, ""))}
        </div>
        <div className="designations__row">
          {fourthClassWagon(coach, selectedSeat, setSelectedSeat).map(
            (item) => item
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeFourthClass;
