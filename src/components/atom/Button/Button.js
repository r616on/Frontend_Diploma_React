import React, { Fragment } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
// import { Link } from "react-router-dom";
import "./style.scss";
const arrButton = [
  { type: "learnMore", text: "Узнать больше" },
  { type: "submit", text: "Отправить" },
  { type: "findTickets", text: "Найти билеты" },
  { type: "next", text: "Далее" },
  { type: "selectPlaces", text: "Выбрать места" },
  { type: "change", text: "Изменить" },
  { type: "confirm", text: "Подтвердить" },
  // { type: "selectPlaces", text: "Выбрать места" },
];

function Button({ type = "learnMore" }) {
  return (
    <Fragment>
      {arrButton.map((item) => {
        if (item.type === type) {
          return (
            <button key={uuidv4()} className={classNames("btn", item.type)}>
              {item.text}
            </button>
          );
        }
      })}
    </Fragment>
  );
}

export default Button;
