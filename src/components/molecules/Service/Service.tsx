import React, { FC, useState } from "react";
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
  const [activeArr, setActiveArr] = useState([]);
  const [hover, setHover] = useState("");
  const handelHover = (e: Event, el: string) => {
    e.preventDefault();
    setHover(el);
  };
  const handelClick = (e: Event, str: string) => {
    e.preventDefault();
    if ([...activeArr].findIndex((item) => item === str) === -1) {
      // @ts-ignore: Unreachable code error
      setActiveArr((prev) => [...prev, str]);
    } else if ([...activeArr].findIndex((item) => item === str) > -1) {
      setActiveArr((prev) => {
        prev.splice(
          activeArr.findIndex((item) => item === str),
          1
        );

        return [...prev];
      });
    }
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
          title={`${coach.have_wifi ? "есть кондиционер" : `нет кондиционера`}`}
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          onClick={(e) => handelClick(e, "AirConditioning")}
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div className="Service__item">
            <AirConditioning inactive={coach.have_air_conditioning} />
          </div>
        </Tooltip>

        <Tooltip
          title={`WI-FI ${
            coach.have_wifi ? "включен" : `цена: ${coach.wifi_price}`
          }`}
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div
            // @ts-ignore: Unreachable code error
            onMouseOver={(e) => handelHover(e, "WiFi")}
            onMouseOut={() => setHover("")}
            // @ts-ignore: Unreachable code error
            onClick={(e) => handelClick(e, "WiFi")}
            className="Service__item"
          >
            <WiFi
              hover={hover === "WiFi"}
              active={[...activeArr].find((item) => item === "WiFi")}
              inactive={coach.have_wifi}
            />
          </div>
        </Tooltip>
        <Tooltip
          title={`Белье ${
            coach.is_linens_included ? "включен" : `цена: ${coach.linens_price}`
          }`}
          placement="bottom"
          overlayClassName="owerlay-Service"
          // @ts-ignore: Unreachable code error
          getPopupContainer={() => document.querySelector(".Service")}
        >
          <div
            className="Service__item"
            // @ts-ignore: Unreachable code error
            onMouseOver={(e) => handelHover(e, "Linens")}
            onMouseOut={() => setHover("")}
            // @ts-ignore: Unreachable code error
            onClick={(e) => handelClick(e, "Linens")}
          >
            <Linens
              hover={hover === "Linens"}
              active={[...activeArr].find((item) => item === "Linens")}
              inactive={coach.is_linens_included}
            />
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
            <Coffee
              hover={hover === "Coffee"}
              active={[...activeArr].find((item) => item === "Coffee")}
            />
          </div>
        </Tooltip>
      </div>
    </section>
  );
};

export default React.memo(Service);
