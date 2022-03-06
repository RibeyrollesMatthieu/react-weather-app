import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cityReducers from "../features/citySlice";
import preferencesReducers from "../features/preferencesSlice";

export const store = configureStore({
  reducer: {
    city: cityReducers,
    preferences: preferencesReducers
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, 
  RootState,
  unknown,
  Action<string>
>;