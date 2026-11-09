// classes
import SingleLesson from "../classes/SingleLesson.class.js";
// import DoubleLesson from '../classes/DoubleLesson.class.js';

const items = {
  english: "Անգլերեն",
  armenianHistory: "Հայոց պատմություն",
  armenianLanguage: "Հայոց լեզու և խոսքի մշակույթ",
  cybersecurity: "Կիբեռանվտանգության հիմունքներ",
  algoritms: "Ալգորիթմ․ և ծրագր․ հիմունքներ",
  ecology: "Կայուն զարգացում և էկոլոգիա",
  mathAnalysis: "Մաթեմատիկական անալիզ",
  lifeSafety: "Կենսագործունեության անվտանգություն",
};

const tch = {
  L_Sargsyan: "Լ․ Սարգսյան",
  K_Mkrtchyan: "Կ․ Մկրտչյան",
  V_Eghiazaryan: "Վ․ Եղիազարյան",
  A_Simonyan: "Ա․ Սիմոնյան",
  G_Gjulnazaryan: "Գ․ Գյուլնազարյան",
  A_Araqelyan: "Ա․ Առաքելյան",
  A_Shamanyan: "Ա․ Շամանյան",
  A_Dallaqyan: "Ա․ Դալլաքյան",
};

const lessons = [
  [
    // Понедельник
    new SingleLesson(items.english, "1/408", tch.L_Sargsyan).setLessonTime(1),
    new SingleLesson(
      items.armenianHistory,
      "1/500",
      tch.K_Mkrtchyan,
    ).setLessonTime(2),
    new SingleLesson(
      items.armenianLanguage,
      "1/500",
      tch.V_Eghiazaryan,
    ).setLessonTime(3),
  ],

  [
    // Вторник
    new SingleLesson(
      items.cybersecurity,
      "1/407 (L7/L7)",
      tch.A_Simonyan,
    ).setLessonTime(1),
    new SingleLesson(
      items.algoritms,
      "1/213 (L5/L5)",
      tch.G_Gjulnazaryan,
    ).setLessonTime(2),
    new SingleLesson(items.ecology, "1/405", tch.A_Araqelyan).setLessonTime(3),
  ],

  [
    // Среда
    new SingleLesson(items.english, "1/408", tch.L_Sargsyan).setLessonTime(2),
    new SingleLesson(
      items.algoritms,
      "1/213 (L5/L5)",
      tch.G_Gjulnazaryan,
    ).setLessonTime(3),
    new SingleLesson(
      items.cybersecurity,
      "1/213 (L5/L5)",
      tch.A_Simonyan,
    ).setLessonTime(4),
  ],

  [
    // Четверг
    new SingleLesson(
      items.mathAnalysis,
      "1/405",
      tch.A_Shamanyan,
    ).setLessonTime(1),
    new SingleLesson(
      items.algoritms,
      "1/213 (L5/L5)",
      tch.G_Gjulnazaryan,
    ).setLessonTime(2),
    new SingleLesson(
      items.mathAnalysis,
      "1/500",
      tch.A_Shamanyan,
    ).setLessonTime(3),
  ],

  [
    // Пятница
    new SingleLesson(items.english, "1/408", tch.L_Sargsyan).setLessonTime(1),
    new SingleLesson(items.lifeSafety, "1/405", tch.A_Dallaqyan).setLessonTime(
      2,
    ),
  ],
];

export default lessons;
