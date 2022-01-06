import React from "react";
// import { Link } from "react-router-dom";
import "./style.scss";

function About() {
  return (
    <section className="about container">
      <h2 className="about__title title">О нас</h2>
      <div className="about__body">
        <p className="indent">
          Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
          наблюдаем, как с каждым днем все больше людей заказывают жд билеты
          через интернет.
        </p>
        <p>
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
          но стоит ли это делать?
        </p>
        <p className="indent">
          Мы расскажем о преимуществах заказа через интернет.
        </p>
        <p>
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
        </p>
        <p>
          Благодаря динамическому ценообразованию цена на билеты в это время
          самая низкая.
        </p>
      </div>
    </section>
  );
}

export default About;
