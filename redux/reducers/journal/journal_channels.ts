import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import journalChannelApi from "../../../lib-api/axios/journal/channels";

export const fetchUserChannels = createAsyncThunk(
  "journal_channels/fetchChannels",
  async (thunkAPI) => {
    const { data } = await journalChannelApi.getUserChannels();
    return data;
  }
);
export const postChannel = createAsyncThunk(
  "journal_channels/postChannel",
  async (form: object, thunkAPI) => {
    const { data } = await journalChannelApi.postChannel(form);
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
          (a: journalChannelResponse) =>
            !state.data.find((b: journalChannelResponse) => b._id === a._id)
        ),
      ];
    });
    builder.addCase(postChannel.fulfilled, (state, action) => {
      state.data = [...state.data, action.payload];
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

interface journalChannelResponse {
  _id: string;
  name: string;
  editors: [string] | [];
  users: [string] | [];
}
