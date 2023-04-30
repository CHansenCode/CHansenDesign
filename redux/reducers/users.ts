import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";

import { getAllUsers } from "../../lib-api/axios/users";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get("/api/users");
  return response.data;
});

export interface usersState {
  status: String;
  ["data"]: any;
  error: null | Object;
}

const initialState: usersState = {
  status: "idle",
  data: [],
  error: null,
};

export const usersSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    getAll: (state) => {
      const { data }: any = getAllUsers();
      console.log(data);
      state = data;
    },
  },
});

export const { getAll } = usersSlice.actions;

export default usersSlice.reducer;

export const selectState = (state: RootState) => state;

export const selectAllUsers = (state: any) => state.data;
