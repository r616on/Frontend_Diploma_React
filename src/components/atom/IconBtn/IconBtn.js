import React, { Fragment } from "react";
import classNames from "classnames";

// import { Link } from "react-router-dom";
import "./style.scss";

function IconBtn({ square, circular }) {
  return (
    <button
      className={classNames("IconBtn", { square: square, circular: circular })}
    />
  );
}

export default IconBtn;
