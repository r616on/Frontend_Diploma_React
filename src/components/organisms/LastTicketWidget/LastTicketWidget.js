import React, { useState } from "react";
import LastTicketItem from "../../molecules/LastTicketItem/LastTicketItem";

// import { Link } from "react-router-dom";
import "./style.scss";

function LastTicketWidget() {
  return (
    <section className="LastTicketWidget">
      <div className="LastTicketWidget__Title">Последние билеты</div>
      <div className="LastTicketWidget__row">
        <LastTicketItem />
      </div>
    </section>
  );
}

export default LastTicketWidget;
