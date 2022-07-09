import React, { FC } from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import backgroundImg from "./img/header-background-finish.jpg";
import IconLocal from "./icon";
import Icon from "../../icon";
import numberWithSpaces from "../../../utils/numberWithSpaces";
import { AppStoreType } from "../../../store/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";
import { actionsCities } from "../../atom/SearchCity/effects/slice";
import { actionsLast } from "../../organisms/LastList/effects/slice";
import { actionsRoutes } from "../../organisms/Routes/effects/slice";
import { actionsSeats } from "../LocationSelectPage/effects/slice";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";
import { actFilterSeatReq } from "../LocationSelectPage/FilterSeats/effects/slice";

const FinishPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Rub } = Icon.other;
  // const navigate = useNavigate();
  const { Email, PrintOut, Present } = IconLocal;
  const { price, personalData } = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo
  );

  const hendlerFinishButton = () => {
    dispatch(actCurrentUserInfo.setRouteInit());
    dispatch(actionsCities.setInit());
    dispatch(actionsLast.setInit());
    dispatch(actionsRoutes.setInit());
    dispatch(actionsSeats.setInit());
    dispatch(actionsFilterRoutes.setInit());
    dispatch(actFilterSeatReq.setInit());
    navigate("/");
  };
  return (
    <PageTemplate noSearch backgroundImage={backgroundImg}>
      <div className="main FinishPage">
        <div className="FinishPage__title">Благодарим Вас за заказ!</div>
        <div className="FinishPage__row">
          <div className="FinishPage__order">
            <div className="FinishPage__order-text">№ Заказа 285АА</div>
            <div className="FinishPage__order-price">
              сумма <span>{numberWithSpaces(price)}</span>{" "}
              <Rub width={21} height={27} />
            </div>
          </div>
          <div className="FinishPage__icon-row">
            <ul className="FinishPage__icon-item">
              <li className="FinishPage__icon-item-icon">
                <Email />
              </li>
              <li className="FinishPage__icon-item-text">
                билеты будут отправлены на ваш <span>e-mail</span>
              </li>
            </ul>
            <ul className="FinishPage__icon-item">
              <li className="FinishPage__icon-item-icon">
                <PrintOut />
              </li>
              <li className="FinishPage__icon-item-text">
                <span>распечатайте </span>и сохраняйте билеты до даты поездки
              </li>
            </ul>
            <ul className="FinishPage__icon-item">
              <li className="FinishPage__icon-item-icon">
                <Present />
              </li>
              <li className="FinishPage__icon-item-text">
                <span>предьявите </span>распечатанные билеты при посадке
              </li>
            </ul>
          </div>
          <ul className="FinishPage__body">
            <li className="title">
              <span>{personalData.name}</span>{" "}
              <span>{personalData.surname}</span>
              {" !"}
            </li>
            <li className="body">
              Ваш заказ успешно оформлен.
              <p>
                В ближайшее время с вами свяжется наш оператор для
                подтверждения.
              </p>
            </li>
            <li className="futter">
              Благодарим Вас за оказанное доверие и желаем приятного
              путешествия!
            </li>
          </ul>
          <div className="FinishPage__footer">
            <div className="raitig">
              <div className="text">Оценить сервис</div>
              <Rate character={<StarOutlined style={{ fontSize: "48px" }} />} />
            </div>
            <button
              className="FinishPage__button"
              onClick={hendlerFinishButton}
            >
              Вернуться на главную
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default React.memo(FinishPage);
