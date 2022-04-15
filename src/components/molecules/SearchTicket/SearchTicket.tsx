import React, { FC, useState } from "react";
// import { Link } from "react-router-dom";
import classNames from "classnames";
import "./style.scss";
import Button from "../../atom/Button/Button";
import DatePicker from "../../atom/DatePicker/DatePicker";
import { useDispatch } from "react-redux";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";
import SearchCity from "../../atom/SearchCity/SearchCity";

interface ISearchTicket {
  selectTrain: number;
}

const SearchTicket: FC<ISearchTicket> = ({ selectTrain }) => {
  const dateFormat = "DD/MM/YYYY";
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actionsRoutes.getItems());
  // }, [dispatch, date_start, date_end]);

  return (
    <div className={classNames("SearchTicket", { selectTrain })}>
      <h1 className="SearchTicket__title">Вся жизнь - путешествие!</h1>
      <form className="SearchTicket__form SearchTicket-form">
        <div className="row">
          <h3 className="SearchTicket-form__title">Направление</h3>

          <div className="SearchTicket-form__item">
            <SearchCity cityFrom />
          </div>

          <span className="SearchTicket-form__icon"></span>
          <div className="SearchTicket-form__item">
            <SearchCity cityTo />
          </div>
        </div>

        <div className="row">
          <h3 className="SearchTicket-form__title">Дата</h3>
          <DatePicker
            className="SearchTicket-form__item"
            // className="DateWidget__date-picker"
            allowClear={false}
            format={dateFormat}
            onChange={(date: any) => {
              dispatch(
                actionsFilterRoutes.setDate_start(date.format("YYYY-MM-DD"))
              );
            }}
          />
          <DatePicker
            className="SearchTicket-form__item"
            // className="DateWidget__date-picker"
            allowClear={false}
            format={dateFormat}
            onChange={(date: any) => {
              dispatch(
                actionsFilterRoutes.setDate_end(date.format("YYYY-MM-DD"))
              );
            }}
          />
        </div>
        <div className="SearchTicket-form__button">
          <Button type="findTickets" />
        </div>
      </form>
    </div>
  );
};

export default React.memo(SearchTicket);
