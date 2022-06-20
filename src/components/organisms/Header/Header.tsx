import React, { FC } from "react";
import "./style.scss";
import navItem from "./data.json";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SearchTicket from "../../molecules/SearchTicket/SearchTicket";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import bagroundImgFirst from "./img/header-first_background.jpg";
import bagroundImgSelectTrain from "./img/selectTrain_background.jpg";
interface Iprops {
  noSearch?: boolean;
  backgroundImage?: string;
}
const Header: FC<Iprops> = ({ noSearch, backgroundImage }) => {
  const step = useSelector((state: AppStoreType) => state.CurrentUserInfo.step);

  return (
    <header
      className={classNames("header", { selectTrain: step })}
      style={{
        backgroundImage: `url(${
          backgroundImage
            ? backgroundImage
            : step
            ? bagroundImgSelectTrain
            : bagroundImgFirst
        })`,
      }}
    >
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
        {!noSearch && <SearchTicket selectTrain={step} />}
      </div>
      {!step && <div className="header__line"></div>}
    </header>
  );
};

export default Header;
