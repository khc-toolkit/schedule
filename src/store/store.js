// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import themeSlice from './slices/themeSlice.slice.js';
import settingsSlice from './slices/settingsSlice.slice.js';
import versionSlice from './slices/versionSlice.slice.js';
import modeSlice from './slices/modeSlice.slice.js';

const store = configureStore({
  reducer: {
    themeSlice,
    settingsSlice,
    versionSlice,
    modeSlice,
  },
});

export default store;