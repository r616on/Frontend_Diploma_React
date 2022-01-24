import React from "react";
import classNames from "classnames";

// import { Link } from "react-router-dom";
import "./style.scss";

function IconBtn({ square, circular, active, handelClick, className }) {
  return (
    <button
      onClick={handelClick}
      className={classNames("IconBtn", {
        [className]: className,
        square: square,
        circular: circular,
        active: active,
      })}
    />
  );
}

export default IconBtn;
