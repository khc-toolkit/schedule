// libs
import { createSlice } from "@reduxjs/toolkit";

// constants
import { defaultMode } from "../../constants/appModes";

const modeSlice = createSlice({
  name: "modeSlice",

  initialState: {
    mode: localStorage.getItem("mode") ?? defaultMode,
  },

  reducers: {
    setMode(state, { payload }) {
      state.mode = payload;
      localStorage.setItem("mode", payload);
    },
  },
});

export default modeSlice.reducer;

export const { 
  setMode,
} = modeSlice.actions;