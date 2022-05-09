import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import Seat from "../../atom/Seat/Seat";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
import { IScheme } from "../Scheme/interface";

const firstClassItem = (
  i: number,
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
    <div key={uuidv4()} className="designations__coupe-row Luxe">
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
      </div>
      <div className="designations__coupe_side">
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
    firstClassItem(
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
    firstClassItem(
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
    firstClassItem(
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
    firstClassItem(
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
    firstClassItem(
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
    firstClassItem(
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
    firstClassItem(
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
    firstClassItem(
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

const SchemeFirstClass: FC<IScheme> = ({
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
      <div className="Scheme__img coupe"></div>
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

export default React.memo(SchemeFirstClass);
