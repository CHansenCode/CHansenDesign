import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import global from "./reducers/globalState";
import users from "./reducers/users";
import journalEntries from "./reducers/journal/journal_entries";
import journalChannels from "./reducers/journal/journal_channels";
import journalDates from "./reducers/journal/journal_date";

export const store = configureStore({
  reducer: {
    global: global,
    users: users,
    journalDates: journalDates,
    journalChannels: journalChannels,
    journalEntries: journalEntries,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
