import { createSlice } from "@reduxjs/toolkit";
import { itemSeatsType } from "../api/routes/id/seats/interfaces";
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
  seats: Array<itemSeatsType>;
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
  seats: [
    {
      coach: {
        _id: "6212d3c65fc56b48553d4878",
        name: "РТИ-90",
        class_type: "second",
        have_wifi: true,
        have_air_conditioning: true,
        price: 0,
        top_price: 1521,
        bottom_price: 2613,
        side_price: 0,
        linens_price: 89,
        wifi_price: 251,
        is_linens_included: true,
        available_seats: 18,
        train: "6212d3ce5fc56b48553d4e26",
      },
      seats: [
        {
          index: 1,
          available: true,
        },
        {
          index: 2,
          available: false,
        },
        {
          index: 3,
          available: true,
        },
        {
          index: 4,
          available: false,
        },
        {
          index: 5,
          available: true,
        },
        {
          index: 6,
          available: false,
        },
        {
          index: 7,
          available: true,
        },
        {
          index: 8,
          available: true,
        },
        {
          index: 9,
          available: true,
        },
        {
          index: 10,
          available: true,
        },
        {
          index: 11,
          available: true,
        },
        {
          index: 12,
          available: true,
        },
        {
          index: 13,
          available: true,
        },
        {
          index: 14,
          available: true,
        },
        {
          index: 15,
          available: true,
        },
        {
          index: 16,
          available: false,
        },
        {
          index: 17,
          available: true,
        },
        {
          index: 18,
          available: true,
        },
      ],
    },
  ],
};

const CurrentUserInfo = createSlice({
  name: "CurrentUserInfo",
  initialState: initialState,
  reducers: {
    setSeats(state, action: { type: string; payload: Array<itemSeatsType> }) {
      state.seats = action.payload;
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
