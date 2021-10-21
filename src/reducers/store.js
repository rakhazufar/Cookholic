import { configureStore } from "@reduxjs/toolkit";
import { foodResult } from ".";

export default configureStore({
  reducer: {
    food: foodResult,
  },
});
