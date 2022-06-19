import React, { FC } from "react";
import classNames from "classnames";
import "./style.scss";
import icon from "../../icon";
import { IpassengerFullInfoItem } from "../../../store/CurrentUserInfo";

interface IPassangerInfoItem {
  className?: any;
  item: IpassengerFullInfoItem;
}

const PassangerInfoItem: FC<IPassangerInfoItem> = ({ className, item }) => {
  const AvatarDef = icon.other.AvatarDef;
  return (
    <section
      className={classNames("PassangerInfoItem", {
        [className]: className,
      })}
    >
      <div className="PassangerInfoItem__row">
        <div className="PassangerInfoItem__Ava">
          <AvatarDef />
          <div className="PassangerInfoItem__Ava-text">
            {item.age === "adult" ? "Взрослый" : "Детский"}
          </div>
        </div>
        <div className="PassangerInfoItem__Info">
          <div className="PassangerInfoItem__Info-Title">
            {item.surname} {item.name} {item.part}
          </div>
          <ul className="PassangerInfoItem__Info-List">
            <li className="PassangerInfoItem__Info-List-Item">
              Пол {item.sex === "Mail" ? "мужской" : "женский"}
            </li>
            <li className="PassangerInfoItem__Info-List-Item">
              Дата рождения {item.birthday}
            </li>
            <li className="PassangerInfoItem__Info-List-Item">
              {item.document === "passport"
                ? `Паспорт РФ ${item.passportSeries} . ${item.passportNumber}`
                : `Свидетельство о рождении ${item.birthCertificate}`}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PassangerInfoItem);
