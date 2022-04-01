import React, { FC } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import RoutesItem from "../RoutesItem/RoutesItem";
import { IitemRoutes } from "../../organisms/Routes/interfaces";
interface IroutesList {
  className?: any;
  items: Array<IitemRoutes>;
}
const RoutesList: FC<IroutesList> = ({ className, items }) => {
  return (
    <section
      className={classNames("RoutesList", {
        [className]: className,
      })}
    >
      <div
        className={classNames("RoutesList__row", {
          [className]: className,
        })}
      >
        {items?.length > 0 &&
          items.map((item) => {
            return (
              <RoutesItem key={uuidv4()} className="RoutesItem" route={item} />
            );
          })}
      </div>
    </section>
  );
};

export default React.memo(RoutesList);
