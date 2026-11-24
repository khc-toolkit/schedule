// constants
import lessons from "../../constants/lessons";

// styles
import classes from "./styles.module.css";

export default function WeekItemsCountPage() {
  const allLessonsAllDays = [];
  const lecturers = {};
  const items = {};

  lessons.forEach((weekLesson) =>
    weekLesson.forEach((lesson) => {
      allLessonsAllDays.push(lesson);

      if (!lecturers[lesson.lecturers]) {
        lecturers[lesson.lecturers] = lesson.title;
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
      <div className={classes.items}>
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
