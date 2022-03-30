import compartment from "./img/compartment.svg";
import express from "./img/express.svg";
import reservedSeat from "./img/reservedSeat.svg";
import sedentary from "./img/sedentary.svg";
import luxury from "./img/luxury.svg";
import WiFi from "./img/WiFi.svg";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";
export interface Iitem {
  icon: string;
  name: string;
  title: string;
  reducer: Function;
}
const arrItem: Array<Iitem> = [
  {
    icon: compartment,
    name: "compartment",
    title: "Купе",
    reducer: actionsFilterRoutes.setHave_second_class,
  },
  {
    icon: reservedSeat,
    name: "reservedSeat",
    title: "Плацкарт",
    reducer: actionsFilterRoutes.setHave_third_class,
  },
  {
    icon: sedentary,
    name: "sedentary",
    title: "Сидячий",
    reducer: actionsFilterRoutes.setHave_fourth_class,
  },
  {
    icon: luxury,
    name: "luxury",
    title: "Люкс",
    reducer: actionsFilterRoutes.setHave_first_class,
  },
  {
    icon: WiFi,
    name: "WiFi",
    title: "Wi-Fi",
    reducer: actionsFilterRoutes.setHave_wifi,
  },
  {
    icon: express,
    name: "express",
    title: "Экспресс",
    reducer: actionsFilterRoutes.setHave_express,
  },
];
export default arrItem;
