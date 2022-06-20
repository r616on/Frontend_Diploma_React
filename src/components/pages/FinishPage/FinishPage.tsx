import React, { FC } from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import backgroundImg from "./img/header-background-finish.jpg";
import Icon from "./icon";

const FinishPage: FC = () => {
  // const navigate = useNavigate();
  const { Email, PrintOut, Present } = Icon;
  // const { route, personalData } = useSelector(
  //   (state: AppStoreType) => state.CurrentUserInfo
  // );
  // const handlerPayEdit = () => {
  //   navigate("/PayPage");
  // };
  // const hendlerConfirm = () => {
  //   navigate("/PayPage");
  // };
  // const routeEdit = () => {
  //   navigate("/first");
  // };
  return (
    <PageTemplate noSearch backgroundImage={backgroundImg}>
      <div className="main FinishPage">
        <div className="FinishPage__title">Благодарим Вас за заказ!</div>
        <div className="FinishPage__row">
          <div className="FinishPage__order">
            <div className="FinishPage__order-text">№Заказа 285АА</div>
            <div className="FinishPage__order-price">сумма 7 760 Р</div>
          </div>
          <div className="FinishPage__icon-row">
            <ul className="FinishPage__icon-item">
              <li className="FinishPage__icon-item-icon"></li>
              <li className="FinishPage__icon-item-text">
                билеты будут отправлены на ваш e-mail
              </li>
            </ul>
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
                <span>распечатайте</span>и сохраняйте билеты до даты поездки
              </li>
            </ul>
            <ul className="FinishPage__icon-item">
              <li className="FinishPage__icon-item-icon">
                <Present />
              </li>
              <li className="FinishPage__icon-item-text">
                <span>предьявите</span>распечатанные билеты при посадке
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default React.memo(FinishPage);
