import React, { FC, Fragment, MouseEventHandler } from "react";
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
  { type: "typeEmpty", text: "" },

  // { type: "selectPlaces", text: "Выбрать места" },
];
interface Ibutton {
  className?: any;
  type: string;
  children?: string;
  handler: MouseEventHandler;
  disabled?: boolean;
}
const Button: FC<Ibutton> = ({
  type = "learnMore",
  className,
  children,
  handler,
  disabled,
}) => {
  return (
    <Fragment>
      {
        // eslint-disable-next-line
        arrButton.map((item) => {
          if (item.type === type) {
            return (
              <button
                disabled={disabled}
                key={uuidv4()}
                onClick={handler}
                className={classNames("btn", {
                  [className]: className,
                  [item.type]: type,
                  disabled: disabled,
                  // typeEmpty: typeEmpty,
                })}
              >
                {!children && item.text}
                {children && children}
              </button>
            );
          }
        })
      }
    </Fragment>
  );
};

export default React.memo(Button);
