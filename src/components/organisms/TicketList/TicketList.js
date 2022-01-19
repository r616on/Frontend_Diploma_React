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
        className="TicketList__row"
        className={classNames("Wagon-Type-List", {
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
