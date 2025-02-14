import { configureStore } from "@reduxjs/toolkit";
import trucksReducer from "./trucks/trucksSlice";

const store = configureStore({
  reducer: {
    trucks: trucksReducer,
  },
});

export default store;
