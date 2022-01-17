import React, { useState } from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import "./style.scss";

function ItemTrainOptions({ name, amount, price, className }) {
  const [hidden, setHidden] = useState(false);
  const hendelHidden = () => {
    setHidden((prev) => !prev);
  };
  return (
    <div
      className={classNames("Train-options-item", { [className]: className })}
    >
      <div className="Train-options-item__name">{name}</div>
      <div onClick={hendelHidden} className="Train-options-item__amount">
        {amount}
      </div>
      <div className="Train-options-price">
        от <span className="icon-rub">{price}</span>
      </div>
      {hidden && (
        <div className="Train-options-item__hidden-list hidden-list">
          <div className="hidden-list__row">
            <div className="hidden-list__item">
              <div className="Train-options-item__name">верхние</div>
              <div className="Train-options-item__amount">{amount}</div>
              <div className="Train-options-price">
                <span className="icon-rub">{price}</span>
              </div>
            </div>
            <div className="hidden-list__item">
              <div className="Train-options-item__name">нижние</div>
              <div className="Train-options-item__amount">{amount}</div>
              <div className="Train-options-price">
                <span className="icon-rub">{price}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemTrainOptions;
