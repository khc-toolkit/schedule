// libs
import { createSlice } from "@reduxjs/toolkit";

// constants
import VERSIONS from "../../constants/versions";
import themesData from "../../constants/themes";

const versionSlice = createSlice({
  name: "versionSlice",

  initialState: {
    versions: initVersionsState(),
  },

  reducers: {
    updateVersion(state, { payload }) {
      const { key, value } = payload;
      state.versions[key] = value;
      localStorage.setItem(key, JSON.stringify(value));
    },
  },
});

export default versionSlice.reducer;

export const { 
  updateVersion,
} = versionSlice.actions;

function initVersionsState() {
  const versions = {};

  // global versions
  for (const optionKey in VERSIONS) {
    const versionData = VERSIONS[optionKey];
    const { key } = versionData;
    const value = +(JSON.parse(localStorage.getItem(key)));
    versions[key] = value;
  }

  // themes version
  for (const themeData of themesData) {
    const { key } = themeData;
    const value = +(JSON.parse(localStorage.getItem(key)));
    versions[key] = value;
  }

  return versions;
}