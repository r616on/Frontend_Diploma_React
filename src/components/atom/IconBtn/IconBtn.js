import React, { Fragment } from "react";
import classNames from "classnames";

// import { Link } from "react-router-dom";
import "./style.scss";

function IconBtn({ square, circular, active, handelClick }) {
  return (
    <button
      onClick={handelClick}
      className={classNames("IconBtn", {
        square: square,
        circular: circular,
        active: active,
      })}
    />
  );
}

export default IconBtn;
