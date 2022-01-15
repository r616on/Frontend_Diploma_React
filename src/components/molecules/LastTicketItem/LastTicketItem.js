import React, { useState } from "react";

// import { Link } from "react-router-dom";
import "./style.scss";

function LastTicketItem() {
  return (
    <section className="LastTicketItem">
      <div className="LastTicketItem__top">
        <div className="LastTicketItem__from">
          <div className="LastTicketItem__title">Санкт-Петербург</div>
          <div className="LastTicketItem__body">Курский вокзал</div>
        </div>
        <div className="LastTicketItem__where">
          <div className="LastTicketItem__title">Самара</div>
          <div className="LastTicketItem__body">Московский вокзал</div>
        </div>
      </div>
      <div className="LastTicketItem__bottom">
        <div className="LastTicketItem__options options">
          <div className="options__item icon-wiFi"></div>
          <div className="options__item icon-express"></div>
          <div className="options__item icon-coffee"></div>
        </div>
        <div className="LastTicketItem__price">
          от
          <span>
            3 800 <span className="icon-rub"></span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default LastTicketItem;
