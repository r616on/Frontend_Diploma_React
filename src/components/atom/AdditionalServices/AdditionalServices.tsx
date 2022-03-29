import React, { FC } from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import "./style.scss";
interface IadditionalServices {
  className?: any;
  express?: boolean;
  wiFi?: boolean;
}
const AdditionalServices: FC<IadditionalServices> = ({
  className,
  express,
  wiFi,
}) => {
  return (
    <div className={classNames("options", { [className]: className })}>
      <div
        className={classNames("options__item icon-wiFi", {
          active: wiFi,
        })}
      ></div>
      <div
        className={classNames("options__item icon-express", {
          active: express,
        })}
      ></div>
      <div className="options__item icon-coffee"></div>
    </div>
  );
};

export default React.memo(AdditionalServices);
