import React from "react";

import { Slider as SliderAnt } from "antd";
// import { Link } from "react-router-dom";
import "./style.scss";
import classNames from "classnames";

function Slider(props) {
  const mini = props.mini;
  return (
    <SliderAnt
      {...props}
      className={classNames(props.className, { mini: mini })}
    />
  );
}

export default Slider;
