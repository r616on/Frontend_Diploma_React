import React, { useState } from "react";
// import { Link } from "react-router-dom";
import classNames from "classnames";
import "./style.scss";
import Button from "../../atom/Button/Button";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "./react-datepicker.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

function SearchTicket({ selectTrain }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={classNames("search-ticket", { selectTrain })}>
      <h1 className="search-ticket__title">Вся жизнь - путешествие!</h1>
      <form className="search-ticket__form search-ticket-form">
        <div className="row">
          <h3 className="search-ticket-form__title">Направление</h3>
          <input className="search-ticket-form__item" />
          <span className="search-ticket-form__icon"></span>
          <input className="search-ticket-form__item" />
        </div>

        <div className="row">
          <h3 className="search-ticket-form__title">Дата</h3>
          <DatePicker
            className="search-ticket-form__item"
            selected={startDate}
            closeOnScroll={true}
            onChange={(date) => setStartDate(date)}
            locale="ru"
          />
          <DatePicker
            className="search-ticket-form__item"
            selected={startDate}
            closeOnScroll={true}
            onChange={(date) => setStartDate(date)}
            locale="ru"
          />
        </div>
        <div className="search-ticket-form__button">
          <Button type="findTickets" />
        </div>
      </form>
    </div>
  );
}

export default SearchTicket;
