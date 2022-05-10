import React, { FC, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "./style.scss";
import Button from "../../atom/Button/Button";
import DatePicker from "../../atom/DatePicker/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";
import SearchCity from "../../atom/SearchCity/SearchCity";
import { AppStoreType } from "../../../store/interfaces";
import { actionsRoutes } from "../../organisms/Routes/effects/slice";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";

interface ISearchTicket {
  selectTrain: number;
}

const SearchTicket: FC<ISearchTicket> = ({ selectTrain }) => {
  const dateFormat = "DD/MM/YYYY";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { from_city_id, to_city_id } = useSelector(
    (state: AppStoreType) => state.FilterRoutes
  );
  const handlerSerch: MouseEventHandler<HTMLButtonElement> = (e) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.preventDefault();
    if (from_city_id && to_city_id) {
      dispatch(actionsRoutes.getItems());
      navigate("/first");
    }
  };

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
                actCurrentUserInfo.setDate_start(date.format("YYYY-MM-DD"))
              );
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
                actCurrentUserInfo.setDate_end(date.format("YYYY-MM-DD"))
              );
              dispatch(
                actionsFilterRoutes.setDate_end(date.format("YYYY-MM-DD"))
              );
            }}
          />
        </div>
        <div className="SearchTicket-form__button">
          <Button type="findTickets" handler={handlerSerch} />
        </div>
      </form>
    </div>
  );
};

export default React.memo(SearchTicket);
