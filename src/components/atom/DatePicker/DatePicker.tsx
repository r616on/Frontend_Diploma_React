import React from "react";
import moment from "./libs/moment";
import generatePicker from "antd/es/date-picker/generatePicker";
import "antd/dist/antd.css";
import "./antStyle.scss";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/ru_RU";

const GenPicker = generatePicker<Date>(moment);

const DatePicker = (props) => {
  return (
    <ConfigProvider locale={locale}>
      <GenPicker {...props} />
    </ConfigProvider>
  );
};

export default DatePicker;
