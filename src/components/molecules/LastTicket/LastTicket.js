import React from "react";
import AdditionalServices from "../../atom/AdditionalServices/AdditionalServices";

// import { Link } from "react-router-dom";
import "./style.scss";

function LastTicket() {
  return (
    <section className="LastTicket">
      <div className="LastTicket__top">
        <div className="LastTicket__from">
          <div className="LastTicket__title">Санкт-Петербург</div>
          <div className="LastTicket__body">Курский вокзал</div>
        </div>
        <div className="LastTicket__where">
          <div className="LastTicket__title">Самара</div>
          <div className="LastTicket__body">Московский вокзал</div>
        </div>
      </div>
      <div className="LastTicket__bottom">
        <AdditionalServices className="LastTicket__options" />
        <div className="LastTicket__price">
          от
          <span>
            3 800 <span className="icon-rub"></span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default LastTicket;
