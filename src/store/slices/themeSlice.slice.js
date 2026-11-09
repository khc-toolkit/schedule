// libs
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeSlice",

  initialState: {
    theme: localStorage.getItem("theme") ?? null,
  },

  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload;
      localStorage.setItem("theme", payload);
      document.body.classList = ["colors_default"];
  		document.body.classList.add(payload);
    },
  },
});

export default themeSlice.reducer;

export const { 
  setTheme,
} = themeSlice.actions;