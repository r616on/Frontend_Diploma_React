import React from "react";
// import { Link } from "react-router-dom";
import "./style.scss";
import avaGerl from "../../img/reviews/avaGerl.jpg";
import avaMean from "../../img/reviews/avaMean.jpg";

function Reviews() {
  return (
    <section className="reviews container">
      <h2 className="reviews__title title">Отзывы</h2>
      <div className="reviews__row">
        <div className="reviews__item item">
          <img className="item__avatar" src={avaGerl} alt="аватар" />
          <div className="item__body">
            <div className="item__name">Екатерина Вальнова</div>
            <div className="item__review">
              Доброжелательные подсказки на всех этапах помогут правильно
              заполнить поля и без затруднений купить авиа или ж/д билет, даже
              если вы заказываете онлайн билет впервые.
            </div>
          </div>
        </div>
        <div className="reviews__item item">
          <img className="item__avatar" src={avaMean} alt="аватар" />
          <div className="item__body">
            <div className="item__name">Евгений Стрыкало</div>
            <div className="item__review">
              СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3
              часа до отправления мы пришлем вам СМС-напоминание о поездке.
            </div>
          </div>
        </div>
      </div>
      <div className="reviews__controls-row">
        <div className="controls-item activ"></div>
        <div className="controls-item"></div>
        <div className="controls-item"></div>
        <div className="controls-item"></div>
        <div className="controls-item"></div>
      </div>
    </section>
  );
}

export default Reviews;
