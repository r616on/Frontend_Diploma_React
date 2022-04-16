import React, { FC, useRef } from "react";
import classNames from "classnames";
import { Tooltip } from "antd";
import "./style.scss";

import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";
interface IService {
  className?: any;
}

const Service: FC<IService> = ({ className }) => {
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
          // @ts-ignore: Unreachable code error
          getPopupContainer={document.querySelector(".Service")}
        >
          <div className="Service__item icon-conditioner inactive"></div>
        </Tooltip>
        <Tooltip
          title="WI-FI"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item icon-wiFi inactive"></div>
        </Tooltip>
        <Tooltip
          title="Белье"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item icon-cash inactive"></div>
        </Tooltip>

        <Tooltip
          title="Питание"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item icon-coffee active"></div>
        </Tooltip>
      </div>
    </section>
  );
};

export default Service;
