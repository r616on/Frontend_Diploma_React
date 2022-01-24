import React from "react";
import classNames from "classnames";
import "./style.scss";
import PassengerCard from "../../molecules/PassengerCard/PassengerCard";

function PassengersList({ className }) {
  return (
    <section
      className={classNames("PassengersList", {
        [className]: className,
      })}
    >
      <div className="PassengersList__row">
        <PassengerCard />
      </div>
    </section>
  );
}

export default PassengersList;
