import React, { useState } from "react";
// import { Link } from "react-router-dom";
import classNames from "classnames";
import "./style.scss";
import Button from "../../atom/Button/Button";
import DatePicker from "../../atom/DatePicker/DatePicker";

function SearchTicket({ selectTrain }) {
  const dateFormat = "DD/MM/YYYY";
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
            // className="DateWidget__date-picker"
            allowClear={false}
            format={dateFormat}
          />
          <DatePicker
            className="search-ticket-form__item"
            // className="DateWidget__date-picker"
            allowClear={false}
            format={dateFormat}
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
