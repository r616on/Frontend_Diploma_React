import { createSlice } from "@reduxjs/toolkit";
import { IRequestStatus } from "../../../utils/requestStatuses";
import { itemRoutes } from "../interfaces";

interface IinitialState {
  total_count: number;
  items: Array<itemRoutes>;
  requestStatus: IRequestStatus;
}
const initialState: IinitialState = {
  total_count: 0,
  items: [],
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

const Routes = createSlice({
  name: "Routes",
  initialState: initialState,
  reducers: {
    getItems() {},
    setItems(state, action: { type: string; payload: Array<itemRoutes> }) {
      state.items = action.payload;
    },
    setTotalCount(state, action: { type: string; payload: number }) {
      state.total_count = action.payload;
    },
    setRequestStatus(state, action: { type: string; payload: IRequestStatus }) {
      state.requestStatus = action.payload;
    },
  },
});

export const actionsRoutes = Routes.actions;
export default Routes.reducer;
