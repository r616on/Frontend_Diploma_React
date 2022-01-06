import React from "react";
import "./style.scss";
import navItem from "./data.json";
import { Link } from "react-router-dom";
import Button from "../../atom/Button/Button";

function Header() {
  return (
    <header className="header">
      <div className="logo header__logo container">Лого</div>
      <nav className="header-nav nav">
        <ul className="nav__row container">
          {navItem.map((item) => (
            <Link key={item.title} to={item.route} className="nav__item">
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="header__body"></div>
      <div className="header__form search-ticket container">
        <h1 className="search-ticket__title">Вся жизнь - путешествие!</h1>
        <form className="search-ticket__form search-ticket-form">
          <h3 className="search-ticket-form__title">Направление</h3>
          <div className="row">
            <input className="search-ticket-form__item" />
            <span className="search-ticket-form__icon"></span>
            <input className="search-ticket-form__item" />
          </div>
          <h3 className="search-ticket-form__title">Дата</h3>
          <div className="row">
            <input className="search-ticket-form__item" type="date" />
            <input className="search-ticket-form__item" type="date" />
          </div>
          <div className="search-ticket-form__button">
            <Button type="findTickets" />
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
