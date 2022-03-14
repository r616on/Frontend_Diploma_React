import { createSlice } from "@reduxjs/toolkit";

interface IsetStatusStep {
  type: any;
  payload: number;
}
interface IinitialState {
  step: number;
}
const initialState: IinitialState = {
  step: 1,
};

const AppStatus = createSlice({
  name: "AppStatus",
  initialState: initialState,
  reducers: {
    setStatusStep(state, action: IsetStatusStep) {
      state.step = action.payload;
    },
  },
});

export const catalogActions = AppStatus.actions;
export default AppStatus.reducer;
