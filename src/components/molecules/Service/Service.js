import React from "react";
import classNames from "classnames";
import { Tooltip } from "antd";

import "./style.scss";

function Service({ className }) {
  return (
    <section
      className={classNames("Service", {
        [className]: className,
      })}
    >
      <div className="Service__title">Обслуживание ФПК</div>
      <div className="Service__row">
        <Tooltip
          title="Кондиционер"
          placement="bottom"
          overlayClassName="owerlay-Service"
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item icon-conditioner"></div>
        </Tooltip>
        <Tooltip
          title="WI-FI"
          placement="bottom"
          overlayClassName="owerlay-Service"
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item icon-wiFi inactive"></div>
        </Tooltip>
        <Tooltip
          title="Белье"
          placement="bottom"
          overlayClassName="owerlay-Service"
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item icon-cash"></div>
        </Tooltip>

        <Tooltip
          title="Питание"
          placement="bottom"
          overlayClassName="owerlay-Service"
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item icon-coffee active"></div>
        </Tooltip>
      </div>
    </section>
  );
}

export default Service;
