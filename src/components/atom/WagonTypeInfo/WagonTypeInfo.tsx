import React, { FC, useState } from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import "./style.scss";
interface IwagonTypeInfo {
  className?: any;
  name: string;
  amount?: string | number;
  price?: string | number;
}
const WagonTypeInfo: FC<IwagonTypeInfo> = ({
  name,
  amount,
  price,
  className,
}) => {
  const [hidden, setHidden] = useState(false);
  const hendelHidden = () => {
    setHidden((prev) => !prev);
  };
  return (
    <div className={classNames("Wagon-Type-Info", { [className]: className })}>
      <div className="Wagon-Type-Info__name">{name}</div>
      <div onClick={hendelHidden} className="Wagon-Type-Info__amount">
        {amount}
      </div>
      <div className="Train-options-price">
        от <span className="icon-rub">{price}</span>
      </div>
      {hidden && (
        <div className="Wagon-Type-Info__hidden-list hidden-list">
          <div className="hidden-list__row">
            <div className="hidden-list__item">
              <div className="Wagon-Type-Info__name">верхние</div>
              <div className="Wagon-Type-Info__amount">{amount}</div>
              <div className="Train-options-price">
                <span className="icon-rub">{price}</span>
              </div>
            </div>
            <div className="hidden-list__item">
              <div className="Wagon-Type-Info__name">нижние</div>
              <div className="Wagon-Type-Info__amount">{amount}</div>
              <div className="Train-options-price">
                <span className="icon-rub">{price}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(WagonTypeInfo);
