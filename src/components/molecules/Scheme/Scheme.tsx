import React, { FC } from "react";
import classNames from "classnames";

import "./style.scss";
import SchemeFourthClass from "../SchemeFourthClass/SchemeFourthClass";
import SchemeSecondClass from "../SchemeSecondClass/SchemeSecondClass";
import SchemeFirstClass from "../SchemeFirstClass/SchemeFirstClass";
import SchemeThirdClass from "../SchemeThirdClass/SchemeThirdClass";
import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";

interface IScheme {
  className?: any;
  selectedClassType: string;
  coach: itemSeatsType;
  selectedAdultSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedAdultSeat: Function;
  selectedChildSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedChildSeat: Function;
  adultCount: number;
  childCount: number;
  selectedTypePasenger: string;
}
const Scheme: FC<IScheme> = ({
  className,
  selectedClassType,
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
    <section
      className={classNames("Scheme", {
        [className]: className,
      })}
    >
      <div className="Scheme__info">
        11 человек выбирают места в этом поезде
      </div>
      {selectedClassType === "first" && (
        <SchemeFirstClass
          coach={coach}
          selectedAdultSeat={selectedAdultSeat}
          setSelectedAdultSeat={setSelectedAdultSeat}
          selectedChildSeat={selectedChildSeat}
          setSelectedChildSeat={setSelectedChildSeat}
          selectedTypePasenger={selectedTypePasenger}
          adultCount={adultCount}
          childCount={childCount}
        />
      )}
      {selectedClassType === "second" && (
        <SchemeSecondClass
          coach={coach}
          selectedAdultSeat={selectedAdultSeat}
          setSelectedAdultSeat={setSelectedAdultSeat}
          selectedChildSeat={selectedChildSeat}
          setSelectedChildSeat={setSelectedChildSeat}
          selectedTypePasenger={selectedTypePasenger}
          adultCount={adultCount}
          childCount={childCount}
        />
      )}
      {selectedClassType === "third" && (
        <SchemeThirdClass
          coach={coach}
          selectedAdultSeat={selectedAdultSeat}
          setSelectedAdultSeat={setSelectedAdultSeat}
          selectedChildSeat={selectedChildSeat}
          setSelectedChildSeat={setSelectedChildSeat}
          selectedTypePasenger={selectedTypePasenger}
          adultCount={adultCount}
          childCount={childCount}
        />
      )}
      {selectedClassType === "fourth" && (
        <SchemeFourthClass
          coach={coach}
          selectedAdultSeat={selectedAdultSeat}
          setSelectedAdultSeat={setSelectedAdultSeat}
          selectedChildSeat={selectedChildSeat}
          setSelectedChildSeat={setSelectedChildSeat}
          selectedTypePasenger={selectedTypePasenger}
          adultCount={adultCount}
          childCount={childCount}
        />
      )}
    </section>
  );
};

export default React.memo(Scheme);
