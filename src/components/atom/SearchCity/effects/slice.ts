import { createSlice } from "@reduxjs/toolkit";
import { IitemCities } from "../../../../api/routes/cities/interfaces";
import { IRequestStatus } from "../../../../utils/requestStatuses";

interface IinitialState {
  items: Array<IitemCities>;
  requestStatus: IRequestStatus;
  searchStr: string;
}
const initialState: IinitialState = {
  searchStr: "",
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
    getItems(state, action: { type: string; payload: string }) {
      state.searchStr = action.payload;
    },
    setItems(state, action: { type: string; payload: Array<IitemCities> }) {
      state.items = action.payload;
    },
    setRequestStatus(state, action: { type: string; payload: IRequestStatus }) {
      state.requestStatus = action.payload;
    },
  },
});

export const actionsCities = Cities.actions;
export default Cities.reducer;
