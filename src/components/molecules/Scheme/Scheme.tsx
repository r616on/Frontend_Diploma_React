import React, { FC } from "react";
import classNames from "classnames";

import "./style.scss";
import SchemeFourthClass from "../SchemeFourthClass/SchemeFourthClass";
import SchemeSecondClass from "../SchemeSecondClass/SchemeSecondClass";
import SchemeFirstClass from "../SchemeFirstClass/SchemeFirstClass";
import SchemeThirdClass from "../SchemeThirdClass/SchemeThirdClass";

interface IScheme {
  className?: any;
}
const Scheme: FC<IScheme> = ({ className }) => {
  return (
    <section
      className={classNames("Scheme", {
        [className]: className,
      })}
    >
      <div className="Scheme__info">
        11 человек выбирают места в этом поезде
      </div>
      <SchemeThirdClass />
    </section>
  );
};

export default Scheme;
