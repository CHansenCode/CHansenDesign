import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";

export interface usersState {
  ["users"]: any;
}

const initialState: usersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    showUsers: (state) => {
      state;
    },
  },
});

export const { showUsers } = usersSlice.actions;

export const selectState = (state: RootState) => state;

export default usersSlice.reducer;
