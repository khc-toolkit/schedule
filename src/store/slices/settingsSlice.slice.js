// libs
import { createSlice } from "@reduxjs/toolkit";

// constants
import SETTINGS from "../../constants/settings";

const settingsSlice = createSlice({
  name: "settingsSlice",

  initialState: {
    options: initOptionsState(),
  },

  reducers: {
    updateOption(state, { payload }) {
      const { key, value } = payload;
      state.options[key] = value;
      localStorage.setItem(key, JSON.stringify(value));
    },
  },
});

export default settingsSlice.reducer;

export const { 
  updateOption,
} = settingsSlice.actions;

function initOptionsState() {
  const options = {};
  
  for (const optionKey in SETTINGS.optionsValues) {
    const optionData = SETTINGS.optionsValues[optionKey];
    const { key, defaultValue } = optionData;
    const value = JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    options[key] = value;
  }

  return options;
}