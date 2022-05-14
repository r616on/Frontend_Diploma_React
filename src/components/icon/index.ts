import { default as passengersDetailsMinusIcon } from "./passengersDetails/MinusIcon";
import PasengerAv from "./passengersDetails/PasengerAv";
import { default as passengersDetailsPlusIcon } from "./passengersDetails/PlusIcon";
import Rub from "./Rub";
import AirConditioning from "./service/AirConditioning";
import Coffee from "./service/Coffee";
import Linens from "./service/Linens";
import WiFi from "./service/WiFi";
import Forward from "./sidebarPasenger/Forward";
import ArrowBack from "./TripDetails/ArrowBack";
import ArrowTo from "./TripDetails/ArrowTo";
import { default as TripDetailsMinusIcon } from "./TripDetails/MinusIcon";
import { default as TripDetailsPlus } from "./TripDetails/PlusIcon";
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
const sidebarPasenger = {
  Forward,
};
const tripDetails = {
  PlusIcon: TripDetailsPlus,
  MinusIcon: TripDetailsMinusIcon,
  ArrowTo,
  ArrowBack,
};
const passengersDetails = {
  PasengerAv,
  PlusIcon: passengersDetailsPlusIcon,
  MinusIcon: passengersDetailsMinusIcon,
};
const Icon = {
  wagonType,
  service,
  other,
  validate,
  sidebarPasenger,
  tripDetails,
  passengersDetails,
};
export type Icontype = typeof Icon;
export default Icon;
