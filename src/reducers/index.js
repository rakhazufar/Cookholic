import { createSlice } from "@reduxjs/toolkit";

export const foodResult = createSlice({
  name: "foodData",
  initialState: {
    food: {},
  },
  reducers: {
    updateFood: (state, action) => {
      state.food = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFood } = foodResult.actions;

export default foodResult.reducer;
