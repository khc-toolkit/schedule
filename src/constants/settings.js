const optionsValues = {
  lessonLineDisabled: {
    name: "Անջատել դասի գրադիենտը",
    defaultValue: false,
    key: "s_lessonLineDisabled",
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
