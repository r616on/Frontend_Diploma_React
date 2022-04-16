import { createSlice } from "@reduxjs/toolkit";
import { IitemRoutes } from "../components/organisms/Routes/interfaces";

interface IsetStatusStep {
  type: any;
  payload: number;
}
interface IinitialState {
  step: number;
  route: IitemRoutes;
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
};

const CurrentUserData = createSlice({
  name: "CurrentUserData",
  initialState: initialState,
  reducers: {
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

export const actionCurrentUserData = CurrentUserData.actions;
export default CurrentUserData.reducer;
