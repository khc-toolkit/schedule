// classes
import PersonalTask from "../classes/PersonalTask.class";

// contats
import ITEMS from "./items";

const PERSONAL_TASKS = [
  new PersonalTask(ITEMS.algoritms),
  new PersonalTask(ITEMS.armenianHistory),
  new PersonalTask(ITEMS.armenianLanguage),
  new PersonalTask(ITEMS.cybersecurity),
  new PersonalTask(ITEMS.ecology),
  new PersonalTask(ITEMS.english),
  new PersonalTask(ITEMS.lifeSafety),
  new PersonalTask(ITEMS.mathAnalysis),
];

export default PERSONAL_TASKS;
