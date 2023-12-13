import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import journalChannelApi from "../../../lib-api/axios/journal/channels";

export const fetchUserChannels = createAsyncThunk(
  "journal_channels/fetchChannels",
  async (thunkAPI) => {
    const { data } = await journalChannelApi.getUserChannels();
    return data;
  }
);

const initialState: journalChannelState = {
  status: "idle",
  data: [],
  error: null,
};

export const journalChannelSlice = createSlice({
  name: "journal_channels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserChannels.fulfilled, (state, action) => {
      state.data = [
        ...state.data,
        ...action.payload.filter(
          (a: journalEntry) =>
            !state.data.find((b: journalEntry) => b._id === a._id)
        ),
      ];
    });
  },
});

export const {} = journalChannelSlice.actions;

export default journalChannelSlice.reducer;

export interface journalChannelState {
  status: String;
  ["data"]: any;
  error: null | Object;
}
