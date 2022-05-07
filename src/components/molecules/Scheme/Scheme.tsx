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
  selectedSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedSeat: Function;
}
const Scheme: FC<IScheme> = ({
  className,
  coach,
  selectedSeat,
  setSelectedSeat,
  selectedClassType,
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
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
      )}
      {selectedClassType === "second" && (
        <SchemeSecondClass
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
      )}
      {selectedClassType === "third" && (
        <SchemeThirdClass
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
      )}
      {selectedClassType === "fourth" && (
        <SchemeFourthClass
          coach={coach}
          selectedSeat={selectedSeat}
          setSelectedSeat={setSelectedSeat}
        />
      )}
    </section>
  );
};

export default Scheme;
