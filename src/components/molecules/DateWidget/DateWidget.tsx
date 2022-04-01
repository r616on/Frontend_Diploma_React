import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";

// import { Link } from "react-router-dom";
import DatePicker from "../../atom/DatePicker/DatePicker";
import { actionsRoutes } from "../../organisms/Routes/effects/slice";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";
import "./style.scss";

const DateWidget: FC = () => {
  const dispatch = useDispatch();
  const { date_start, date_end } = useSelector(
    (state: AppStoreType) => state.FilterRoutes
  );
  const dateFormat = "DD.MM.YYYY";

  useEffect(() => {
    dispatch(actionsRoutes.getItems());
  }, [dispatch, date_start, date_end]);

  return (
    <div className="DateWidget">
      <h3 className="DateWidget_title">Дата поездки</h3>
      <DatePicker
        className="DateWidget__date-picker"
        allowClear={false}
        format={dateFormat}
        onChange={(date: any) => {
          dispatch(
            actionsFilterRoutes.setDate_start(date.format("YYYY-MM-DD"))
          );
        }}
      />
      <h3 className="DateWidget_title">Дата возвращения</h3>
      <DatePicker
        className="DateWidget__date-picker"
        allowClear={false}
        format={dateFormat}
        onChange={(date: any) => {
          dispatch(actionsFilterRoutes.setDate_end(date.format("YYYY-MM-DD")));
        }}
      />
    </div>
  );
};

export default React.memo(DateWidget);
