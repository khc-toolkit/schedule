// constants
import lessons from "../../constants/lessons";

// styles
import classes from "./styles.module.css";

export default function LecturersPage() {
  const lectures = {};

  lessons.forEach((weekLesson) =>
    weekLesson.forEach((lesson) => {
      if (!lectures[lesson.lecturers]) {
        lectures[lesson.lecturers] = lesson.title;
      }
    }),
  );

  return (
    <div className={classes.root}>
      <div className={classes.lecturers}>
        {Object.keys(lectures).map((lecturer, ind) => (
          <div key={ind} className={classes.lecturer}>
            <p className={classes.lecturerName}>{lecturer}</p>
            <p className={classes.lecturerTitle}>{lectures[lecturer]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
