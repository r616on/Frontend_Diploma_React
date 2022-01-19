import React from "react";
import Ticket from "../../molecules/Ticket/Ticket";
import "./style.scss";

function TicketList() {
  return (
    <section className="TicketList">
      <div className="TicketList__row">
        <Ticket />
      </div>
    </section>
  );
}

export default TicketList;
