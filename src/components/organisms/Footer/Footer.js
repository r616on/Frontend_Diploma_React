import React from "react";
import Button from "../../atom/Button/Button";
// import { Link } from "react-router-dom";
import "./style.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__feedback feedback">
          <h3 className="feedback__title title">Свяжитесь с нами</h3>
          <ul className="feedback__item-row">
            <li className="feedback__item">
              <div className="feedback__icon icon-tel"></div>
              <div className="feedback__body">8 (800) 000 00 00</div>
            </li>
            <li className="feedback__item">
              <div className="feedback__icon icon-mail"></div>
              <div className="feedback__body">inbox@mail.ru</div>
            </li>
            <li className="feedback__item">
              <div className="feedback__icon icon-skype"></div>
              <div className="feedback__body">tu.train.tickets</div>
            </li>
            <li className="feedback__item">
              <div className="feedback__icon icon-mark"></div>
              <div className="feedback__body">
                г. Москва ул. Московская 27-35 555 555
              </div>
            </li>
          </ul>
        </div>
        <div className="footer__subscription subscription">
          <h3 className="subscription__title title">Подписка</h3>
          <form className="subscription__form subscription-form">
            <label className="subscription-form__lable">
              Будьте в курсе событий
              <input className="subscription-form__input" />
            </label>
            <Button type="submit" />
          </form>
          <h3 className="subscription__title title">Подписывайтесь на нас</h3>
          <ul className="subscription__social-networks social-networks">
            <li className="social-networks__item">
              <a href="/" className="social-networks__link icon-ytube">
                {" "}
              </a>
            </li>
            <li className="social-networks__item">
              <a href="/" className="social-networks__link icon-linkIn">
                {" "}
              </a>
            </li>
            <li className="social-networks__item">
              <a href="/" className="social-networks__link icon-G">
                {" "}
              </a>
            </li>
            <li className="social-networks__item">
              <a href="/" className="social-networks__link icon-facebook">
                {" "}
              </a>
            </li>
            <li className="social-networks__item">
              <a href="/" className="social-networks__link icon-twitter">
                {" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__strip"></div>
      <div className="footer__bottom container">
        <div className="logo">Лого</div>
        <div className="arrow-up icon-arrowUp"></div>
        <div className="footer__text">2022WEB</div>
      </div>
    </footer>
  );
}

export default Footer;
