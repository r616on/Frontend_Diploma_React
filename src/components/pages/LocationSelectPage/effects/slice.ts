import { createSlice } from "@reduxjs/toolkit";
import { itemSeatsType } from "../../../../api/routes/id/seats/interfaces";
import { IRequestStatus } from "../../../../utils/requestStatuses";

interface IinitialState {
  items: Array<itemSeatsType>;
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

const Seats = createSlice({
  name: "Seats",
  initialState: initialState,
  reducers: {
    getItems() {},
    setItems(state, action: { type: string; payload: Array<itemSeatsType> }) {
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

export const actionsSeats = Seats.actions;
export default Seats.reducer;
