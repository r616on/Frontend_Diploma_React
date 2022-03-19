import axios from "axios";
import { postOrder } from "./order/order";
import { getCities } from "./routes/cities/cities";
import { getIdSeats } from "./routes/id/seats/seats";
import { getLast } from "./routes/last/last";
import { getRoutes } from "./routes/routes";
import { postSubscrube } from "./subscribe/subscrube";

export const instanse = axios.create({
  baseURL: "http://80.87.192.113:3001/",
});

export const AppAPI = {
  getCities,
  getRoutes,
  getLast,
  getIdSeats,
  postOrder,
  postSubscrube,
};
