import { createSlice } from "@reduxjs/toolkit";
import { itemLastType } from "../interfaces";
import { IRequestStatus } from "../../../../utils/requestStatuses";

interface IinitialState {
  items: Array<itemLastType>;
  requestStatus: IRequestStatus;
}
const initialState: IinitialState = {
  items: [],
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};

const Last = createSlice({
  name: "Last",
  initialState: initialState,
  reducers: {
    getItems() {},
    setItems(state, action: { type: string; payload: Array<itemLastType> }) {
      state.items = action.payload;
    },
    setRequestStatus(state, action: { type: string; payload: IRequestStatus }) {
      state.requestStatus = action.payload;
    },
  },
});

export const actionsLast = Last.actions;
export default Last.reducer;
