import Rub from "./Rub";
import AirConditioning from "./service/AirConditioning";
import Coffee from "./service/Coffee";
import Linens from "./service/Linens";
import WiFi from "./service/WiFi";
import ErrorIcon from "./Validate/ErrorIcon";
import TrueIcon from "./Validate/TrueIcon";
import First from "./wagonType/First";
import Fourth from "./wagonType/Fourth";
import Second from "./wagonType/Second";
import Third from "./wagonType/Third";

const wagonType = {
  First,
  Second,
  Third,
  Fourth,
};
const validate = { TrueIcon, ErrorIcon };
const service = {
  Coffee,
  WiFi,
  Linens,
  AirConditioning,
};
const other = {
  Rub,
};

const Icon = {
  wagonType,
  service,
  other,
  validate,
};
export type Icontype = typeof Icon;
export default Icon;
