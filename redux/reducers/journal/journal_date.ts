import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import journalChannelApi from "../../../lib-api/axios/journal/channels";

import { dates } from "../../../lib";

const initialState: journalDateState = {
  active: new Date().toISOString(),
  integer: dates().integer,
  error: null,
};

export const journalDateSlice = createSlice({
  name: "journal_channels",
  initialState,
  reducers: {
    decrementDate: (state) => {
      let newDate = dates(state.active, -24);
      state.active = newDate.isoString;
      state.integer = newDate.integer;
    },
    incrementDate: (state) => {
      let newDate = dates(state.active, 24);
      state.active = newDate.isoString;
      state.integer = newDate.integer;
    },
  },
});

export const { decrementDate, incrementDate } = journalDateSlice.actions;

export default journalDateSlice.reducer;

export interface journalDateState {
  active: string;
  integer: number;
  error: null | Object;
}
