import { Input } from "antd";
import { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { AppStoreType } from "../../../store/interfaces";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";
import "./style.scss";

const PersonalData: FC = () => {
  const dispatch = useDispatch();

  const personalData = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo.personalData
  );

  const [surname, setUserSurname] = useState(personalData.surname);
  const [name, setUserName] = useState(personalData.name);
  const [patr, setUserPatr] = useState(personalData.patr);
  const [phone, setUserPhone] = useState(personalData.phone);
  const [email, setUserEmail] = useState(personalData.email);

  useEffect(() => {
    dispatch(actCurrentUserInfo.setPersonalSurname(surname));
    dispatch(actCurrentUserInfo.setPersonalName(name));
    dispatch(actCurrentUserInfo.setPersonalPatr(patr));
    dispatch(actCurrentUserInfo.setPersonalPhone(phone));
    dispatch(actCurrentUserInfo.setPersonalEmail(email));
  }, [dispatch, surname, name, patr, phone, email]);

  return (
    <>
      <div>
        <div className="passenger__initials">
          <div className="passengerInitials__block">
            <div className="passengerInput__title">Фамилия</div>
            <Input
              className="passengerInitials__input"
              placeholder="Иванов"
              value={surname}
              required
              onChange={(e) => setUserSurname(e.target.value)}
            />
          </div>
          <div className="passengerInitials__block">
            <div className="passengerInput__title">Имя</div>
            <Input
              className="passengerInitials__input"
              placeholder="Иван"
              value={name}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="passengerInitials__block">
            <div className="passengerInput__title">Отчество</div>
            <Input
              className="passengerInitials__input"
              placeholder="Иванович"
              value={patr}
              required
              onChange={(e) => setUserPatr(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mainInfoBody__phone">
        <div className="mainInfoBody__title">Контактный телефон</div>
        <Input
          className="payPage__input"
          placeholder="+79533221818"
          value={phone}
          required
          onChange={(e) => setUserPhone(e.target.value)}
        />
      </div>
      <div className="mainInfoBody__mail">
        <div className="mainInfoBody__title">E-mail</div>
        <Input
          className="payPage__input"
          placeholder="email@gmail.ru"
          value={email}
          required
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
    </>
  );
};

export default React.memo(PersonalData);
