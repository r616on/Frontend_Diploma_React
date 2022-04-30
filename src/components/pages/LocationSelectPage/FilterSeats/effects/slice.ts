import { createSlice } from "@reduxjs/toolkit";
import { IparamIdSeats } from "../../../../../api/routes/id/seats/interfaces";

const initialState: IparamIdSeats = {
  id: "6265ec8eb18b153899fc37be",
  // Идентификатор направления
  have_first_class: null,
  // Люкс
  have_second_class: null,
  // Купе
  have_third_class: null,
  // Плацкарт
  have_fourth_class: null,
  // Сидячее место
  have_wifi: null,
  // Имеется WiFi
  have_air_conditioning: null,
  // Имеется кондиционер
};

const obj = {
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
};
const FilterSeats = createSlice({
  name: "FilterSeats",
  initialState: initialState,
  reducers: {
    setId(state, action: { type: string; payload: string }) {
      state.id = action.payload;
    },
    setHave_first_class(state, action: { type: string; payload: boolean }) {
      state.have_first_class = action.payload;
    },
    setHave_second_class(state, action: { type: string; payload: boolean }) {
      state.have_second_class = action.payload;
    },
    setHave_third_class(state, action: { type: string; payload: boolean }) {
      state.have_third_class = action.payload;
    },
    setHave_fourth_class(state, action: { type: string; payload: boolean }) {
      state.have_fourth_class = action.payload;
    },
    setHave_wifi(state, action: { type: string; payload: boolean }) {
      state.have_wifi = action.payload;
    },
    setHave_air_conditioning(
      state,
      action: { type: string; payload: boolean }
    ) {
      state.have_first_class = action.payload;
    },
  },
});

export const actionsFilterSeats = FilterSeats.actions;
export default FilterSeats.reducer;
