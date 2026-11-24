// classes
import SingleLesson from "../classes/SingleLesson.class.js";
// import DoubleLesson from '../classes/DoubleLesson.class.js';

// constants
import TEACHERS from "./teachers.js";
import ITEMS from "./items.js";

const lessons = [
  [
    // Понедельник
    new SingleLesson(ITEMS.english, "1/408", TEACHERS.L_Sargsyan).setLessonTime(
      1,
    ),
    new SingleLesson(
      ITEMS.armenianHistory,
      "1/500",
      TEACHERS.K_Mkrtchyan,
    ).setLessonTime(2),
    new SingleLesson(
      ITEMS.armenianLanguage,
      "1/500",
      TEACHERS.V_Eghiazaryan,
    ).setLessonTime(3),
  ],

  [
    // Вторник
    new SingleLesson(
      ITEMS.cybersecurity,
      "1/407 (L7/L7)",
      TEACHERS.A_Simonyan,
    ).setLessonTime(1),
    new SingleLesson(
      ITEMS.algoritms,
      "1/213 (L5/L5)",
      TEACHERS.G_Gjulnazaryan,
    ).setLessonTime(2),
    new SingleLesson(
      ITEMS.ecology,
      "1/405",
      TEACHERS.A_Araqelyan,
    ).setLessonTime(3),
  ],

  [
    // Среда
    new SingleLesson(ITEMS.english, "1/408", TEACHERS.L_Sargsyan).setLessonTime(
      2,
    ),
    new SingleLesson(
      ITEMS.algoritms,
      "1/213 (L5/L5)",
      TEACHERS.G_Gjulnazaryan,
    ).setLessonTime(3),
    new SingleLesson(
      ITEMS.cybersecurity,
      "1/213 (L5/L5)",
      TEACHERS.A_Simonyan,
    ).setLessonTime(4),
  ],

  [
    // Четверг
    new SingleLesson(
      ITEMS.mathAnalysis,
      "1/405",
      TEACHERS.A_Shamanyan,
    ).setLessonTime(1),
    new SingleLesson(
      ITEMS.algoritms,
      "1/213 (L5/L5)",
      TEACHERS.G_Gjulnazaryan,
    ).setLessonTime(2),
    new SingleLesson(
      ITEMS.mathAnalysis,
      "1/500",
      TEACHERS.A_Shamanyan,
    ).setLessonTime(3),
  ],

  [
    // Пятница
    new SingleLesson(ITEMS.english, "1/408", TEACHERS.L_Sargsyan).setLessonTime(
      1,
    ),
    new SingleLesson(
      ITEMS.lifeSafety,
      "1/405",
      TEACHERS.A_Dallaqyan,
    ).setLessonTime(2),
  ],
];

export default lessons;
