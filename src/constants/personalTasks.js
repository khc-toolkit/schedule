// classes
import PersonalTask from "../classes/PersonalTask.class";

// contats
import ITEMS from "./items";

const PERSONAL_TASKS = [
  new PersonalTask(
    "Ընդհանուր",
    "https://drive.google.com/drive/folders/1ItGCxGyRWwyUzpd7dtOtl5dQnYfFWlf8",
  ),
  new PersonalTask(
    ITEMS.algoritms,
    "https://drive.google.com/drive/folders/1iXgdKkmVkFzLkQzRm1zW2OsG0aaUPSWu",
    true,
  ),
  new PersonalTask(ITEMS.armenianHistory),
  new PersonalTask(ITEMS.armenianLanguage),
  new PersonalTask(
    ITEMS.cybersecurity,
    "https://drive.google.com/drive/folders/1XXSZvBeJYDFctlEf3g1o7CG_X97r8g_8",
    true,
  ),
  new PersonalTask(
    ITEMS.ecology,
    "https://drive.google.com/drive/folders/1DR32Sq4U8SGg2uMOgy-jKXWPSU2q6RDE",
  ),
  new PersonalTask(
    ITEMS.english,
    "https://drive.google.com/drive/folders/1X1xHz9WCa9kgfrPgD-CPwV4qGrw7_79K",
  ),
  new PersonalTask(
    ITEMS.lifeSafety,
    "https://drive.google.com/drive/folders/11Gsys5V89G_LGtz7t8Uo2pSerV-gTD3X",
  ),
  new PersonalTask(ITEMS.mathAnalysis),
];

export default PERSONAL_TASKS;
