import React from "react";
import classNames from "classnames";
import Ticket from "../../molecules/Ticket/Ticket";
import "./style.scss";

function TicketList({ className }) {
  return (
    <section
      className={classNames("TicketList", {
        [className]: className,
      })}
    >
      <div
        className={classNames("TicketList__row", {
          [className]: className,
        })}
      >
        <Ticket className="item" />
        <Ticket className="item" />
        <Ticket className="item" />
        <Ticket className="item" />
        <Ticket className="item" />
      </div>
    </section>
  );
}

export default TicketList;
