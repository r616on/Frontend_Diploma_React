import React, { FC } from "react";
import classNames from "classnames";

// import { Link } from "react-router-dom";
import "./style.scss";
interface IIconBtn {
  square?: boolean;
  circular?: boolean;
  active?: boolean;
  handelClick: any;
  className?: any;
}

const IconBtn: FC<IIconBtn> = ({
  square,
  circular,
  active,
  handelClick,
  className,
}) => {
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
};

export default React.memo(IconBtn);
