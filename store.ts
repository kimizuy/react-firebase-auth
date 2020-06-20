import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "./lib/slices/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
