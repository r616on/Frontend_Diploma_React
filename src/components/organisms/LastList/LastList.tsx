import React, { FC, useEffect } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import LastTicket from "../../molecules/LastTicket/LastTicket";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import { actionsLast } from "./effects/slice";
interface ILastList {
  className: any;
}
const LastList: FC<ILastList> = ({ className }) => {
  const items = useSelector((state: AppStoreType) => state.Last.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionsLast.getItems());
  }, [dispatch]);
  return (
    <section
      className={classNames("LastTicketList", {
        [className]: className,
      })}
    >
      <div className="LastTicketList__Title">Последние билеты</div>
      <div className="LastTicketList__row">
        {items &&
          items.map((item) => {
            return <LastTicket key={uuidv4()} item={item} />;
          })}
      </div>
    </section>
  );
};

export default React.memo(LastList);
