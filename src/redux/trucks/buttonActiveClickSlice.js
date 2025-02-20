import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: {},
};

const buttonActiveClickSlice = createSlice({
  name: "buttonActive",
  initialState,
  reducers: {
    toggleButton: (state, action) => {
      const id = action.payload;
      state.isActive[id] = !state.isActive[id];
    },
  },
});

export const { toggleButton } = buttonActiveClickSlice.actions;

export default buttonActiveClickSlice.reducer;
