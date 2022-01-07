import React, { useState } from "react";
import "./style.scss";
import navItem from "./data.json";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SearchTicket from "../../molecules/SearchTicket/SearchTicket";

function Header({ selectTrain }) {
  return (
    <header className={classNames("header", { selectTrain: selectTrain })}>
      <div className="header__logo ">
        <div className="logo container">Лого</div>
      </div>
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
      <div className="header__form  container">
        <SearchTicket selectTrain={selectTrain} />
      </div>
    </header>
  );
}

export default Header;
