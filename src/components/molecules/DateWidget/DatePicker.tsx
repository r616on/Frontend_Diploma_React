import moment from "./libs/moment";
import generatePicker from "antd/es/date-picker/generatePicker";

const DatePicker = generatePicker<Date>(moment);

export default DatePicker;
