import React from "react";
import classNames from "classnames";
import LastTicket from "../../molecules/LastTicket/LastTicket";

// import { Link } from "react-router-dom";
import "./style.scss";

function LastTicketList({ className }) {
  return (
    <section
      className={classNames("LastTicketList", {
        [className]: className,
      })}
    >
      <div className="LastTicketList__Title">Последние билеты</div>
      <div className="LastTicketList__row">
        <LastTicket />
        <LastTicket />
        <LastTicket />
      </div>
    </section>
  );
}

export default LastTicketList;
