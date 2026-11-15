// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import settingsSlice from "./slices/settingsSlice.slice.js";
import versionSlice from "./slices/versionSlice.slice.js";

const store = configureStore({
  reducer: {
    settingsSlice,
    versionSlice,
  },
});

export default store;
