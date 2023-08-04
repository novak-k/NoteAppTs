import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "../reducers/noteSliceReducer";

export const store = configureStore({
  reducer: {
    notes: noteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
