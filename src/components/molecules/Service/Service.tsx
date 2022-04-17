import React, { FC, useRef } from "react";
import classNames from "classnames";
import { Tooltip } from "antd";
import "./style.scss";

import { Icoach } from "../../../api/routes/id/seats/interfaces";
interface IService {
  className?: any;
  coach: Icoach;
}

const Service: FC<IService> = ({ className, coach }) => {
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
          <div
            className={classNames("Service__item icon-conditioner", {
              inactive: coach.have_air_conditioning,
            })}
          ></div>
        </Tooltip>

        <Tooltip
          title="WI-FI"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div
            className={classNames("Service__item icon-wiFi", {
              inactive: coach.have_wifi,
            })}
          ></div>
        </Tooltip>
        <Tooltip
          title="Белье"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div
            className={classNames("Service__item icon-cash", {
              inactive: coach.is_linens_included,
            })}
          ></div>
        </Tooltip>

        <Tooltip
          title="Питание"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className={classNames("Service__item icon-coffee")}></div>
        </Tooltip>
      </div>
    </section>
  );
};

export default Service;
