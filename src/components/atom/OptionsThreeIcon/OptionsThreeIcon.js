import React, { Fragment } from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import "./style.scss";

function OptionsThreeIcon({ className }) {
  return (
    <div className={classNames("options", { [className]: className })}>
      <div className="options__item icon-wiFi"></div>
      <div className="options__item icon-express"></div>
      <div className="options__item icon-coffee"></div>
    </div>
  );
}

export default OptionsThreeIcon;
