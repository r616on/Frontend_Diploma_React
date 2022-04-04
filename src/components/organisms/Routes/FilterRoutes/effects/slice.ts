import { createSlice } from "@reduxjs/toolkit";
import { Iparameters } from "../../interfaces";

const initialState: Iparameters = {
  from_city_id: "6212d3c15fc56b48553d43bc",
  to_city_id: "6212d3c15fc56b48553d43bd",
  date_start: null,
  date_end: null,
  date_start_arrival: null,
  date_end_arrival: null,
  have_first_class: null,
  have_second_class: null,
  have_third_class: null,
  have_fourth_class: null,
  have_wifi: null,
  have_air_conditioning: null,
  have_express: null,
  price_from: null,
  price_to: null,
  start_departure_hour_from: null,
  start_departure_hour_to: null,
  start_arrival_hour_from: null,
  start_arrival_hour_to: null,
  end_departure_hour_from: null,
  end_departure_hour_to: null,
  end_arrival_hour_from: null,
  end_arrival_hour_to: null,
  limit: 5,
  offset: 0,
  sort: null,
};

const FilterRoutes = createSlice({
  name: "FilterRoutes",
  initialState: initialState,
  reducers: {
    // setParams(
    //   state,
    //   action: {
    //     type: string;
    //     payload: { params: ParamsType; value: string | boolean };
    //   }
    // ) {
    //   const { params, value } = action.payload;
    //   state = { ...state, [params]: value };
    // },
    setFrom_city_id(state, action: { type: string; payload: string }) {
      state.from_city_id = action.payload;
    },
    setTo_city_id(state, action: { type: string; payload: string }) {
      state.to_city_id = action.payload;
    },
    setDate_start(state, action: { type: string; payload: string }) {
      state.date_start = action.payload;
    },
    setDate_end(state, action: { type: string; payload: string }) {
      state.date_end = action.payload;
    },
    setDate_start_arrival(state, action: { type: string; payload: string }) {
      state.date_start_arrival = action.payload;
    },
    setDate_end_arrival(state, action: { type: string; payload: string }) {
      state.date_end_arrival = action.payload;
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
      state.have_third_class = action.payload;
    },
    setHave_wifi(state, action: { type: string; payload: boolean }) {
      state.have_wifi = action.payload;
    },
    setHave_air_conditioning(
      state,
      action: { type: string; payload: boolean }
    ) {
      state.have_air_conditioning = action.payload;
    },
    setHave_express(state, action: { type: string; payload: boolean }) {
      state.have_express = action.payload;
    },
    setPrice_from(state, action: { type: string; payload: number }) {
      state.price_from = action.payload;
    },
    setPrice_to(state, action: { type: string; payload: number }) {
      state.price_from = action.payload;
    },
    setStart_departure_hour_from(
      state,
      action: { type: string; payload: number }
    ) {
      state.start_departure_hour_from = action.payload;
    },
    setStart_departure_hour_to(
      state,
      action: { type: string; payload: number }
    ) {
      state.start_departure_hour_to = action.payload;
    },
    setStart_arrival_hour_from(
      state,
      action: { type: string; payload: number }
    ) {
      state.start_arrival_hour_from = action.payload;
    },
    setStart_arrival_hour_to(state, action: { type: string; payload: number }) {
      state.start_arrival_hour_to = action.payload;
    },
    setEnd_departure_hour_from(
      state,
      action: { type: string; payload: number }
    ) {
      state.end_departure_hour_from = action.payload;
    },
    setEnd_departure_hour_to(state, action: { type: string; payload: number }) {
      state.end_departure_hour_to = action.payload;
    },
    setEnd_arrival_hour_from(state, action: { type: string; payload: number }) {
      state.end_arrival_hour_from = action.payload;
    },
    setEnd_arrival_hour_to(state, action: { type: string; payload: number }) {
      state.end_arrival_hour_to = action.payload;
    },
    setLimit(state, action: { type: string; payload: number }) {
      state.limit = action.payload;
    },
    setOffset(state, action: { type: string; payload: number }) {
      state.offset = action.payload;
    },
    setSort(state, action: { type: string; payload: string }) {
      state.sort = action.payload;
    },
  },
});

export const actionsFilterRoutes = FilterRoutes.actions;
export default FilterRoutes.reducer;
