import { configureStore } from "@reduxjs/toolkit";
import trucksReducer from "./trucks/trucksSlice";
import buttonActiveClickReducer from "../redux/trucks/buttonActiveClickSlice";
import favoritesReducer from "./trucks/favoritesSlice";

const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    buttonActive: buttonActiveClickReducer,
    favorites: favoritesReducer,
  },
});

export default store;
