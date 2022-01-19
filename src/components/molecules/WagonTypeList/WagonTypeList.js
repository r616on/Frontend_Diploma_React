import React from "react";
import WagonTypeInfo from "../../atom/WagonTypeInfo/WagonTypeInfo";
import classNames from "classnames";
// import { Link } from "react-router-dom";

import "./style.scss";

function WagonTypeList({ className }) {
  return (
    <div
      className={classNames("Wagon-Type-List", {
        [className]: className,
      })}
    >
      <WagonTypeInfo
        className="item"
        name={"Сидячий"}
        amount={88}
        price={"1 920"}
      />
      <WagonTypeInfo
        className="item"
        name={"Плацкарт"}
        amount={52}
        price={"2 530"}
      />
      <WagonTypeInfo
        className="item"
        name={"Купе"}
        amount={24}
        price={"3 820"}
      />
    </div>
  );
}

export default WagonTypeList;
