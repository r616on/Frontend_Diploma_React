import { Checkbox } from "antd";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";
import { AppStoreType } from "../../../store/interfaces";
import PersonalData from "../../molecules/PersonalData/PersonalData";
// import { Link } from "react-router-dom";
import "./style.scss";

interface IPay {
  className?: any;
}

const Pay: FC<IPay> = () => {
  const personalData = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo.personalData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payType, setPayType] = useState(
    personalData.payType ? personalData.payType : ""
  );

  const buyTickets = () => {
    if (
      personalData.surname &&
      personalData.name &&
      personalData.patr &&
      personalData.phone &&
      personalData.email &&
      payType !== ""
    ) {
      dispatch(actCurrentUserInfo.setPayType(payType));
      // dispatch(appStateSetProgress(3));

      navigate("/ConfirmPage");
    }
  };
  return (
    <div className="payPage__main">
      <div className="payPage__mainInfo">
        <div className="payPage__mainInfoHeader">Персональные данные</div>
        <div className="payPage__mainInfoBody">
          <PersonalData />
        </div>
        <div className="payPage__payInfoHeader">Способ оплаты</div>
        <div className="payPage__payInfoBody">
          <Checkbox
            className={`payInfoBody__checkbox ${
              payType === "payOnline" ? "active" : ""
            }`}
            onChange={() => setPayType("payOnline")}
            checked={payType === "payOnline"}
          >
            Онлайн
          </Checkbox>
          <div className="payInfoBody__options">
            <div className="payInfoBody__option">Банковской картой</div>
            <div className="payInfoBody__option">PayPal</div>
            <div className="payInfoBody__option">Visa QIWI Wallet</div>
          </div>
          <Checkbox
            className={`payPage__payInfoCheckbox ${
              payType === "payCash" ? "active" : ""
            }`}
            onChange={() => setPayType("payCash")}
            checked={payType === "payCash"}
          >
            Наличными
          </Checkbox>
        </div>
      </div>

      <div className="payPage-controls">
        <button className="payPage__mainButton" onClick={buyTickets}>
          Купить билеты
        </button>
      </div>
    </div>
  );
};

export default React.memo(Pay);
