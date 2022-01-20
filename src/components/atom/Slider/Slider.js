import React from "react";

import { Slider as SliderAnt } from "antd";
// import { Link } from "react-router-dom";
import "./style.scss";
import classNames from "classnames";

function Slider(props) {
  const mini = props.mini;
  return (
    <React.StrictMode>
      <SliderAnt
        {...props}
        className={classNames(props.className, { mini: mini })}
      />
    </React.StrictMode>
  );
}

export default Slider;
