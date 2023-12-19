import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import journalsApi from "../../../lib-api/axios/journal/entries";

export const fetchEntries = createAsyncThunk(
  "journal/fetchEntries",
  async (params: { channelId: string; date: string }, thunkAPI) => {
    console.log(params);
    const { data } = await journalsApi.getEntries(params);
    console.log(data);
    return data;
  }
);
export const postEntry = createAsyncThunk(
  "journal/postOne",
  async (form: object, thunkAPI) => {
    const { data } = await journalsApi.postEntry(form);
    process.env.NODE_ENV === "development" &&
      console.log("journal_postOne", data);
    return data;
  }
);
export const patchEntry = createAsyncThunk(
  "journal/patchOne",
  async (form: journalEntry, thunkAPI) => {
    const { data } = await journalsApi.patchEntry(form);
    process.env.NODE_ENV === "development" &&
      console.log("journal_patchOne", data);
    return data;
  }
);
export const deleteEntry = createAsyncThunk(
  "journal/deleteOne",
  async (id: string, thunkAPI) => {
    const { data } = await journalsApi.deleteEntry(id);
    process.env.NODE_ENV === "development" &&
      console.log("journal_deleteOne", data);
    return data;
  }
);

const initialState: journalState = {
  status: "idle",
  data: [],
  error: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEntries.fulfilled, (state, action) => {
      state.data = [
        ...state.data,
        ...action.payload.filter(
          (a: journalEntry) =>
            !state.data.find((b: journalEntry) => b._id === a._id)
        ),
      ];
    });
    builder.addCase(postEntry.fulfilled, (state, action) => {
      state.data = [...state.data, action.payload];
    });
    builder.addCase(patchEntry.fulfilled, (state, action) => {
      state.data = [
        ...state.data.map((a: journalEntry) =>
          a._id === action.payload._id ? action.payload : a
        ),
      ];
    });
    builder.addCase(deleteEntry.fulfilled, (state, action) => {
      state.data = [
        ...state.data.filter(
          (a: journalEntry) => !(a._id === action.payload._id)
        ),
      ];
    });
  },
});

export const {} = journalSlice.actions;

export default journalSlice.reducer;

export interface journalState {
  status: String;
  ["data"]: any;
  error: null | Object;
}
