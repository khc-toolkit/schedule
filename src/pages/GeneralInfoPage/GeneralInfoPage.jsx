// constants
import lessons from "../../constants/lessons";

// styles
import classes from "./styles.module.css";

export default function GeneralInfoPage() {
  const allLessonsAllDays = [];
  const teachers = new Set();
  const items = {};

  lessons.forEach((weekLesson) =>
    weekLesson.forEach((lesson) => {
      allLessonsAllDays.push(lesson);
      teachers.add(lesson.teacher);

      if (items[lesson.title]) {
        ++items[lesson.title];
      } else {
        items[lesson.title] = 1;
      }
    }),
  );

  return (
    <div className={classes.root}>
      <div className={classes.teachers}>
        <h2>Դասախոսներ</h2>

        {Array.from(teachers).map((teacher, ind) => (
          <div key={ind} className={classes.teacher}>
            {teacher}
          </div>
        ))}
      </div>

      <div className={classes.items}>
        <h2>Շաբաթական ունենք</h2>
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
