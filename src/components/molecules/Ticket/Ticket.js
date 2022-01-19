import React from "react";
import AdditionalServices from "../../atom/AdditionalServices/AdditionalServices";
import Button from "../../atom/Button/Button";
import ItemTimetablele from "../../atom/ItemTimetablele/ItemTimetableIe";
import WagonTypeList from "../WagonTypeList/WagonTypeList";
import "./style.scss";

function Ticket() {
  return (
    <section className="Ticket">
      <div className="Ticket__row">
        <div className="Ticket__Train-name Train-name">
          <div className="Train-name__icon"></div>
          <div className="Train-name__name">020У</div>
          <ul className="Train-name__path">
            <li className="icon-arrowRMini">Москва</li>
            <li className="icon-arrowRMini">Санкт-Петербург</li>
            <li>«Мегаполис»</li>
          </ul>
        </div>
        <div className="Ticket__timetable timetable">
          <div className="timetable__row there">
            <ItemTimetablele
              time={"00:41"}
              city={"Москва"}
              railway={"Ленинградский вокзал"}
            />
            <div className="timetable__duration">
              <div className="duration-time">8 : 32</div>
              <div className="there-icon"></div>
            </div>
            <ItemTimetablele
              time={"00:41"}
              city={"Москва"}
              railway={"Ленинградский вокзал"}
            />
          </div>
          <div className="timetable__row back">
            <ItemTimetablele
              time={"00:41"}
              city={"Москва"}
              railway={"Ленинградский вокзал"}
            />
            <div className="timetable__duration reverse">
              <div className="duration-time">8 : 32</div>
              <div className="there-icon"></div>
            </div>
            <ItemTimetablele
              time={"00:41"}
              city={"Москва"}
              railway={"Ленинградский вокзал"}
            />
          </div>
        </div>
        <div className="Ticket__Train-options Train-options">
          <WagonTypeList className={"Train-options__WagonTypeList"} />
          <AdditionalServices className={"Train-options__AdditionalServices"} />
          <Button type={"selectPlaces"} className={"Train-options__button"} />
        </div>
      </div>
    </section>
  );
}

export default Ticket;
