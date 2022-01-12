import React, { useState } from "react";
// import { Link } from "react-router-dom";
import classNames from "classnames";
import "./style.scss";
import IconBtn from "../../atom/IconBtn/IconBtn";

function SearchTicket() {
  return (
    <div className="ThereWidget">
      <div className="ThereWidget__mini ThereWidget-mini">
        <div className="ThereWidget-mini__icon"></div>
        <div className="ThereWidget-mini__text"></div>
        <IconBtn square />
      </div>
    </div>
  );
}

export default SearchTicket;
