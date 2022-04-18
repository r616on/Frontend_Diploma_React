import React, { FC, useRef, useState } from "react";
import classNames from "classnames";
import { Tooltip } from "antd";
import "./style.scss";

import { Icoach } from "../../../api/routes/id/seats/interfaces";
import Icon from "../../icon";
interface IService {
  className?: any;
  coach: Icoach;
}

const Service: FC<IService> = ({ className, coach }) => {
  const { Coffee, WiFi, Linens, AirConditioning } = Icon.service;
  const [hover, setHover] = useState("");
  const [activeArr, setActiveArr] = useState([""]);
  const { have_air_conditioning, is_linens_included } = coach;
  const handelClick = (e: Event, str: string) => {
    e.preventDefault();
    // // @ts-ignore: Unreachable code error
    // if (![...activeArr].indexOf(str) > -1) {
    //   // @ts-ignore: Unreachable code error
    //   setActiveArr((prev) => [...[...prev].push(str)]);
    //   console.log(activeArr);
    // } else {
    //   // @ts-ignore: Unreachable code error
    //   setActiveArr((prev) => [...prev.slice([...activeArr].indexOf(str), 1)]);
    //   console.log(activeArr);
    // }
  };
  const handelHover = (e: Event, el: string) => {
    e.preventDefault();
    setHover(el);
  };
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
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item">
            <AirConditioning />
          </div>
        </Tooltip>

        <Tooltip
          title="WI-FI"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item">
            <WiFi />
          </div>
        </Tooltip>
        <Tooltip
          title="Белье"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item">
            <Linens />
          </div>
        </Tooltip>

        <Tooltip
          title="Питание"
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div
            // @ts-ignore: Unreachable code error
            onMouseOver={(e) => handelHover(e, "Coffee")}
            onMouseOut={() => setHover("")}
            // @ts-ignore: Unreachable code error
            onClick={(e) => handelClick(e, "Coffee")}
            className="Service__item"
          >
            <Coffee hover={hover === "Coffee"} />
          </div>
        </Tooltip>
      </div>
    </section>
  );
};

export default Service;
