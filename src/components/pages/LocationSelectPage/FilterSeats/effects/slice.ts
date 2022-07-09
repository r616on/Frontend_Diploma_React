import { createSlice } from "@reduxjs/toolkit";
import { IparamIdSeats } from "../../../../../api/routes/id/seats/interfaces";

const initialState: IparamIdSeats = {
  id: "6265ecafb18b153899fc45be",
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
    setInit() {
      return initialState;
    },
  },
});

export const actFilterSeatReq = FilterSeats.actions;
export default FilterSeats.reducer;
