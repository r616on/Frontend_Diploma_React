import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import Seat from "../../atom/Seat/Seat";
import { IScheme } from "../Scheme/interface";

import "./style.scss";

const fourthClassItem = (
  i: number,
  coach: itemSeatsType,
  selectedAdultSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedAdultSeat: Function,
  selectedChildSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedChildSeat: Function,
  adultCount: number,
  childCount: number,
  selectedTypePasenger: string,
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
            selectedAdultSeat={selectedAdultSeat}
            setSelectedAdultSeat={setSelectedAdultSeat}
            selectedChildSeat={selectedChildSeat}
            setSelectedChildSeat={setSelectedChildSeat}
            selectedTypePasenger={selectedTypePasenger}
            adultCount={adultCount}
            childCount={childCount}
          />
          <Seat
            className="designations__seat"
            number={i + 1}
            coach={coach}
            selectedAdultSeat={selectedAdultSeat}
            setSelectedAdultSeat={setSelectedAdultSeat}
            selectedChildSeat={selectedChildSeat}
            setSelectedChildSeat={setSelectedChildSeat}
            selectedTypePasenger={selectedTypePasenger}
            adultCount={adultCount}
            childCount={childCount}
          />
        </div>
        <div className="designations__coupe_side">
          <Seat
            className="designations__seat"
            number={i + 2}
            coach={coach}
            selectedAdultSeat={selectedAdultSeat}
            setSelectedAdultSeat={setSelectedAdultSeat}
            selectedChildSeat={selectedChildSeat}
            setSelectedChildSeat={setSelectedChildSeat}
            selectedTypePasenger={selectedTypePasenger}
            adultCount={adultCount}
            childCount={childCount}
          />
          <Seat
            className="designations__seat"
            number={i + 3}
            coach={coach}
            selectedAdultSeat={selectedAdultSeat}
            setSelectedAdultSeat={setSelectedAdultSeat}
            selectedChildSeat={selectedChildSeat}
            setSelectedChildSeat={setSelectedChildSeat}
            selectedTypePasenger={selectedTypePasenger}
            adultCount={adultCount}
            childCount={childCount}
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
            selectedAdultSeat={selectedAdultSeat}
            setSelectedAdultSeat={setSelectedAdultSeat}
            selectedChildSeat={selectedChildSeat}
            setSelectedChildSeat={setSelectedChildSeat}
            selectedTypePasenger={selectedTypePasenger}
            adultCount={adultCount}
            childCount={childCount}
          />
          <Seat
            className="designations__seat"
            number={i + 33}
            coach={coach}
            selectedAdultSeat={selectedAdultSeat}
            setSelectedAdultSeat={setSelectedAdultSeat}
            selectedChildSeat={selectedChildSeat}
            setSelectedChildSeat={setSelectedChildSeat}
            selectedTypePasenger={selectedTypePasenger}
            adultCount={adultCount}
            childCount={childCount}
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
            selectedAdultSeat={selectedAdultSeat}
            setSelectedAdultSeat={setSelectedAdultSeat}
            selectedChildSeat={selectedChildSeat}
            setSelectedChildSeat={setSelectedChildSeat}
            selectedTypePasenger={selectedTypePasenger}
            adultCount={adultCount}
            childCount={childCount}
          />
          <Seat
            className="designations__seat"
            style={last ? { display: "none" } : null}
            number={i + 35}
            coach={coach}
            selectedAdultSeat={selectedAdultSeat}
            setSelectedAdultSeat={setSelectedAdultSeat}
            selectedChildSeat={selectedChildSeat}
            setSelectedChildSeat={setSelectedChildSeat}
            selectedTypePasenger={selectedTypePasenger}
            adultCount={adultCount}
            childCount={childCount}
          />
        </div>
      </div>
    </div>
  );
};
const fourthClassWagon = (
  coach: itemSeatsType,
  selectedAdultSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedAdultSeat: Function,
  selectedChildSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedChildSeat: Function,
  adultCount: number,
  childCount: number,
  selectedTypePasenger: string
) => {
  const arr = [];
  arr.push(
    fourthClassItem(
      1,
      coach,
      selectedAdultSeat,
      setSelectedAdultSeat,
      selectedChildSeat,
      setSelectedChildSeat,
      adultCount,
      childCount,
      selectedTypePasenger,
      true,
      false
    )
  );
  arr.push(
    fourthClassItem(
      5,
      coach,
      selectedAdultSeat,
      setSelectedAdultSeat,
      selectedChildSeat,
      setSelectedChildSeat,
      adultCount,
      childCount,
      selectedTypePasenger
    )
  );
  arr.push(
    fourthClassItem(
      9,
      coach,
      selectedAdultSeat,
      setSelectedAdultSeat,
      selectedChildSeat,
      setSelectedChildSeat,
      adultCount,
      childCount,
      selectedTypePasenger
    )
  );
  arr.push(
    fourthClassItem(
      13,
      coach,
      selectedAdultSeat,
      setSelectedAdultSeat,
      selectedChildSeat,
      setSelectedChildSeat,
      adultCount,
      childCount,
      selectedTypePasenger
    )
  );
  arr.push(
    fourthClassItem(
      17,
      coach,
      selectedAdultSeat,
      setSelectedAdultSeat,
      selectedChildSeat,
      setSelectedChildSeat,
      adultCount,
      childCount,
      selectedTypePasenger
    )
  );
  arr.push(
    fourthClassItem(
      21,
      coach,
      selectedAdultSeat,
      setSelectedAdultSeat,
      selectedChildSeat,
      setSelectedChildSeat,
      adultCount,
      childCount,
      selectedTypePasenger
    )
  );
  arr.push(
    fourthClassItem(
      25,
      coach,
      selectedAdultSeat,
      setSelectedAdultSeat,
      selectedChildSeat,
      setSelectedChildSeat,
      adultCount,
      childCount,
      selectedTypePasenger
    )
  );
  arr.push(
    fourthClassItem(
      29,
      coach,
      selectedAdultSeat,
      setSelectedAdultSeat,
      selectedChildSeat,
      setSelectedChildSeat,
      adultCount,
      childCount,
      selectedTypePasenger,
      false,
      true
    )
  );
  return arr;
};

const SchemeFourthClass: FC<IScheme> = ({
  coach,
  selectedAdultSeat,
  setSelectedAdultSeat,
  selectedChildSeat,
  setSelectedChildSeat,
  adultCount,
  childCount,
  selectedTypePasenger,
}) => {
  return (
    <div className="Scheme__block">
      <div className="Scheme__img Sedentary"></div>
      <div className="Scheme__designations designations ">
        <div className="designations__wagon-number">
          {parseInt(coach.coach.name.replace(/[^\d]/g, ""))}
        </div>
        <div className="designations__row">
          {fourthClassWagon(
            coach,
            selectedAdultSeat,
            setSelectedAdultSeat,
            selectedChildSeat,
            setSelectedChildSeat,
            adultCount,
            childCount,
            selectedTypePasenger
          ).map((item) => item)}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SchemeFourthClass);
