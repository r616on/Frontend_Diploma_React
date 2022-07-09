import { createSlice } from "@reduxjs/toolkit";
import { IitemCities } from "../../../../api/routes/cities/interfaces";
import { IRequestStatus } from "../../../../utils/requestStatuses";

interface IinitialState {
  items: Array<IitemCities>;
  requestStatus: IRequestStatus;
  searchTime: string;
  from: string;
  to: string;
}
const initialState: IinitialState = {
  from: "",
  to: "",
  searchTime: "",
  items: [],
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

const Cities = createSlice({
  name: "Cities",
  initialState: initialState,
  reducers: {
    changeSearchField(state, action: { type: string; payload: string }) {
      state.searchTime = action.payload;
    },
    getItems() {},
    setFrom(state, action: { type: string; payload: string }) {
      state.from = action.payload;
    },
    setTo(state, action: { type: string; payload: string }) {
      state.to = action.payload;
    },
    setItems(state, action: { type: string; payload: Array<IitemCities> }) {
      state.items = action.payload;
    },
    setRequestStatus(state, action: { type: string; payload: IRequestStatus }) {
      state.requestStatus = action.payload;
    },
    setInit() {
      return initialState;
    },
  },
});

export const actionsCities = Cities.actions;
export default Cities.reducer;
