// constants
import lessons from "../../constants/lessons";

// styles
import classes from "./styles.module.css";

export default function GeneralInfoPage() {
  const allLessonsAllDays = [];
  const lecturerss = {};
  const items = {};

  lessons.forEach((weekLesson) =>
    weekLesson.forEach((lesson) => {
      allLessonsAllDays.push(lesson);

      if (!lecturerss[lesson.lecturers]) {
        lecturerss[lesson.lecturers] = lesson.title;
      }

      if (items[lesson.title]) {
        ++items[lesson.title];
      } else {
        items[lesson.title] = 1;
      }
    }),
  );

  return (
    <div className={classes.root}>
      <div className={classes.lecturerss}>
        <h2>Դասախոսներ</h2>
        {Object.keys(lecturerss).map((lecturers, ind) => (
          <div key={ind} className={classes.lecturers}>
            <p className={classes.lecturersName}>{lecturers}</p>
            <p className={classes.lecturersTitle}>{lecturerss[lecturers]}</p>
          </div>
        ))}
      </div>

      <div className={classes.items}>
        <h2>Շաբաթական դասաժամեր</h2>
        {Object.keys(items)
          .sort((a, b) => items[b] - items[a])
          .map((itemName) => (
            <div key={itemName} className={classes.item}>
              <p className={classes.itemName}>{itemName}</p>
              <p className={classes.itemCount}>{items[itemName]}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
