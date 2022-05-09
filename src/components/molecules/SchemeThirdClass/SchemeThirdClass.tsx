import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import Seat from "../../atom/Seat/Seat";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import { IScheme } from "../Scheme/interface";

const thirdClassItem = (
  i: number,
  b: number,
  coach: itemSeatsType,
  selectedAdultSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedAdultSeat: Function,
  selectedChildSeat: Array<{ id: string; number: number; price: number }>,
  setSelectedChildSeat: Function,
  adultCount: number,
  childCount: number,
  selectedTypePasenger: string
) => {
  return (
    <div key={uuidv4()} className="designations__coupe-row ReservedSeat">
      <div className="row">
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
            className="designations__seat top"
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
            className="designations__seat top"
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
      <div className="designations__coupe_bottom">
        <Seat
          className="designations__seat"
          number={b + 31}
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
          number={b + 32}
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
  );
};
const createWagon = (
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
    thirdClassItem(
      1,
      1,
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
    thirdClassItem(
      5,
      3,
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
    thirdClassItem(
      9,
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
    thirdClassItem(
      13,
      7,
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
    thirdClassItem(
      17,
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
    thirdClassItem(
      21,
      11,
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
    thirdClassItem(
      24,
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
    thirdClassItem(
      28,
      15,
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
  return arr;
};

const SchemeThirdClass: FC<IScheme> = ({
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
      <div className="Scheme__img ReservedSeat"></div>
      <div className="Scheme__designations designations ">
        <div className="designations__wagon-number">
          {parseInt(coach.coach.name.replace(/[^\d]/g, ""))}
        </div>
        <div className="designations__row">
          {createWagon(
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

export default React.memo(SchemeThirdClass);
