import React, { FC } from "react";
import classNames from "classnames";
import "./style.scss";
import { AppStoreType } from "../../../store/interfaces";
import { useSelector } from "react-redux";
import PassangerInfoItem from "../../atom/PassangerInfoItem/PassangerInfoItem";
import numberWithSpaces from "../../../utils/numberWithSpaces";
import Icon from "../../icon";
import Button from "../../atom/Button/Button";
import { useNavigate } from "react-router-dom";

interface IPassangerInfoList {
  className?: any;
}

const PassangerInfoList: FC<IPassangerInfoList> = ({ className }) => {
  const { Rub } = Icon.other;
  const navigate = useNavigate();
  const { passengerFullInfo, price } = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo
  );
  const handlerEdit = () => {
    navigate("/fillingDocuments");
  };
  return (
    <section
      className={classNames("PassangerInfoList", {
        [className]: className,
      })}
    >
      <div className="PassangerInfoList__title">Пассажиры</div>
      <div className="PassangerInfoList__row">
        <div className="PassangerInfoList__List">
          {passengerFullInfo.map((item) => {
            return (
              <PassangerInfoItem
                key={item.uidd}
                className="PassangerInfoList__Item"
                item={item}
              />
            );
          })}
        </div>
        <div className="PassangerInfoList__Price">
          <div className="PassangerInfoList__Price-info">
            Всего{" "}
            <span>
              {numberWithSpaces(price)} <Rub width={20} height={24} />
            </span>
          </div>
          <div className="PassangerInfoList__Price-control">
            <Button
              type={"change"}
              // @ts-ignore
              handler={handlerEdit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PassangerInfoList);
