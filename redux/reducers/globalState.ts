import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";

export interface GlobalState {
  showDash: boolean;
}

const initialState: GlobalState = {
  showDash: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    showDash: (state) => {
      state.showDash = true;
    },
    hideDash: (state) => {
      state.showDash = false;
    },
    toggleDash: (state) => {
      state.showDash = !state.showDash;
    },
  },
});

export const { showDash, hideDash, toggleDash } = globalSlice.actions;

export const selectState = (state: RootState) => state;

export default globalSlice.reducer;
