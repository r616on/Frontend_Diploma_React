import { Checkbox } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";
import { AppStoreType } from "../../../store/interfaces";
import PersonalData from "../../molecules/PersonalData/PersonalData";
// import { Link } from "react-router-dom";
import "./style.scss";

interface IPay {
  className?: any;
}

const Pay: FC<IPay> = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const personalData = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo.personalData
  );

  const [payOnline, setPayOnline] = useState(personalData.payOnline);
  const [payCash, setPayCash] = useState(personalData.payCash);

  useEffect(() => {
    dispatch(actCurrentUserInfo.stateSetPayOnline(payOnline));
    dispatch(actCurrentUserInfo.stateSetPayCash(payCash));
  }, [dispatch, payOnline, payCash]);

  const buyTickets = () => {
    if (
      personalData.surname &&
      personalData.name &&
      personalData.patr &&
      personalData.phone &&
      personalData.email
    ) {
      // dispatch(appStateSetProgress(3));
      // history.push("./confirm");
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
            className={`payInfoBody__checkbox ${payOnline ? "active" : ""}`}
            onChange={() => setPayOnline(!payOnline)}
            checked={payOnline}
          >
            Онлайн
          </Checkbox>
          <div className="payInfoBody__options">
            <div className="payInfoBody__option">Банковской картой</div>
            <div className="payInfoBody__option">PayPal</div>
            <div className="payInfoBody__option">Visa QIWI Wallet</div>
          </div>
          <Checkbox
            className={`payPage__payInfoCheckbox ${payCash ? "active" : ""}`}
            onChange={() => setPayCash(!payCash)}
            checked={payCash}
          >
            Наличными
          </Checkbox>
        </div>
      </div>
      <button className="payPage__mainButton" onClick={buyTickets}>
        Купить билеты
      </button>
    </div>
  );
};

export default React.memo(Pay);
