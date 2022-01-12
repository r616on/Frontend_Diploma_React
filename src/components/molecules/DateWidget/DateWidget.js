import React from "react";
// import { Link } from "react-router-dom";
import DatePicker from "../../atom/DatePicker/DatePicker";
import "./style.scss";

function DateWidget() {
  const dateFormat = "DD.MM.YYYY";
  return (
    <div className="DateWidget">
      <h3 className="DateWidget_title">Дата поездки</h3>
      <DatePicker
        className="DateWidget__date-picker"
        allowClear={false}
        format={dateFormat}
      />
      <h3 className="DateWidget_title">Дата возвращения</h3>
      <DatePicker
        className="DateWidget__date-picker"
        allowClear={false}
        format={dateFormat}
      />
    </div>
  );
}

export default DateWidget;
