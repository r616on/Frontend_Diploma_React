import { createSlice } from "@reduxjs/toolkit";
import { IitemRoutes } from "../components/organisms/Routes/interfaces";

interface IsetStatusStep {
  type: any;
  payload: number;
}
interface IinitialState {
  step: number;
  route: IitemRoutes;
  from_city_id: string;
  to_city_id: string;
  date_start: string;
  date_end: string;
  seatsAdult: Array<{ id: string; number: number; price: number }> | null;
  seatsChild: Array<{ id: string; number: number; price: number }> | null;
  passengerFullInfo: Array<IpassengerFullInfoItem>;
}

export interface IpassengerFullInfoItem {
  id: string;
  age: string;
  numberSeats: number;
  price: number;
  surname: string;
  name: string;
  birthday: string;
  document: string;
  restriction: boolean;
  passportSeries?: string;
  passportNumber?: string;
  birthCertificate?: string;
}
const initialState: IinitialState = {
  step: 1,
  route: {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    is_express: false,
    min_price: 1971,
    available_seats: 127,
    available_seats_info: {
      second: 32,
      third: 96,
    },
    departure: {
      _id: "6212d3de5fc56b48553d53b3",
      have_first_class: false,
      have_second_class: true,
      have_third_class: true,
      have_fourth_class: false,
      have_wifi: true,
      have_air_conditioning: true,
      is_express: false,
      min_price: 1971,
      duration: 150300,
      available_seats: 127,
      available_seats_info: {
        second: 32,
        third: 96,
      },
      train: {
        _id: "6212d3ca5fc56b48553d4cd8",
        name: "Тройка - 89",
      },
      from: {
        railway_station_name: "Казанский",
        city: {
          _id: "6212d3c15fc56b48553d43bc",
          name: "москва",
        },
        datetime: 1645534735,
      },
      to: {
        railway_station_name: "Московский",
        city: {
          _id: "6212d3c15fc56b48553d43bd",
          name: "санкт-петербург",
        },
        datetime: 1645685035,
      },
      price_info: {
        second: {
          top_price: 2358,
          bottom_price: 1971,
        },
        third: {
          top_price: 3255,
          bottom_price: 3550,
          side_price: 4455,
        },
      },
    },
  },
  from_city_id: "",
  to_city_id: "",
  date_start: "",
  date_end: "",
  seatsAdult: [
    {
      id: "6212d3c55fc56b48553d46df",
      number: 4,
      price: 2388,
    },
    {
      id: "6212d3c55fc56b48553d46df",
      number: 3,
      price: 2388,
    },
  ],
  seatsChild: null,
  passengerFullInfo: [],
};

const CurrentUserInfo = createSlice({
  name: "CurrentUserInfo",
  initialState: initialState,
  reducers: {
    setPassengerFullInfo(state, action: { payload: IpassengerFullInfoItem }) {
      const id = action.payload.id;
      const index = state.passengerFullInfo.findIndex((item) => item.id === id);
      if (index === -1) {
        state.passengerFullInfo.push(action.payload);
      } else {
        state.passengerFullInfo[index] = action.payload;
      }
    },
    setSeatsChild(
      state,
      action: {
        type: string;
        payload: Array<{ id: string; number: number; price: number }>;
      }
    ) {
      state.seatsChild = action.payload;
    },
    setSeatsAdult(
      state,
      action: {
        type: string;
        payload: Array<{ id: string; number: number; price: number }>;
      }
    ) {
      state.seatsAdult = action.payload;
    },
    setDate_start(state, action: { payload: string }) {
      state.date_start = action.payload;
    },
    setDate_end(state, action: { payload: string }) {
      state.date_end = action.payload;
    },
    setFrom_city_id(state, action: { payload: string }) {
      state.from_city_id = action.payload;
    },
    setTo_city_id(state, action: { payload: string }) {
      state.to_city_id = action.payload;
    },
    setStatusStep(state, action: IsetStatusStep) {
      state.step = action.payload;
    },
    setRoute(state, action: { type: string; payload: IitemRoutes }) {
      state.route = action.payload;
    },
    setRouteInit(state) {
      state = initialState;
    },
  },
});

export const actCurrentUserInfo = CurrentUserInfo.actions;
export default CurrentUserInfo.reducer;
