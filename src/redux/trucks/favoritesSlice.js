import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const truckId = action.payload;
      if (!state.favorites.includes(truckId)) {
        state.favorites.push(truckId);
      }
    },

    removeFromFavorites: (state, action) => {
      const truckId = action.payload;
      state.favorites = state.favorites.filter((id) => id !== truckId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
