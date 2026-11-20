const optionsValues = {
  lessonIconsDisabled: {
    name: "Թաքցնել պատկերակները դասի քարտում",
    defaultValue: false,
    key: "s_lessonIconsDisabled",
  },

  new_year_lights: {
    name: "Անջատել լուսը",
    defaultValue: false,
    key: "s_ny_lights",
  },

  new_year_snowfall: {
    name: "Անջատել ձյունը",
    defaultValue: false,
    key: "s_ny_snowfall",
  },

  // notMergeLessonNumbers: { // for practice mode
  //   name: "Լսարանի թվերը անջատ ցույց տալ",
  //   defaultValue: true,
  //   key: "s_notMergeLessonNumbers",
  // },
};

const optionsKeys = Object.keys(optionsValues);

const SETTINGS = {
  optionsValues,
  optionsKeys,
};

export default SETTINGS;
