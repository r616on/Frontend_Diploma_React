import React from "react";
import TrainSelectItem from "../../molecules/TrainSelectItem/TrainSelectItem";
import "./style.scss";

function TrainSelectList() {
  return (
    <section className="TrainSelect-List">
      <div className="TrainSelect-List__row">
        <TrainSelectItem />
      </div>
    </section>
  );
}

export default TrainSelectList;
