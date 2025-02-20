import userReducer from "./slices/userReducre";
import { dataSlice } from "../apiReducers/userApiReducer";
import { configureStore } from "@reduxjs/toolkit";

// Create the store
const store = configureStore({
  reducer: {
    user: userReducer.reducer, // Corrected reference
    [dataSlice.reducerPath]: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataSlice.middleware),
});

export default store;
