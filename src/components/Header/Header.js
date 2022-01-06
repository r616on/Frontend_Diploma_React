import React from "react";
import "./style.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo header__logo container">Лого</div>
      <nav className="header-nav nav">
        <ul className="nav__row container">
          <li className="nav__item">О нас</li>
          <li className="nav__item">Как это работает</li>
          <li className="nav__item">Отзывы</li>
          <li className="nav__item">Контакты</li>
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
          <button className="search-ticket-form__button">Найти билеты</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
