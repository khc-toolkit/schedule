// components
import Lesson from "../Lesson/Lesson";

// utils
import returnValueByLessonSlot from "../../utils/returnValueByLessonSlot";

// styles
import classes from "./styles.module.css";

export default function LessonArtemisTheme({ data }) {
  const { start } = data;
  let planetClassName = returnValueByLessonSlot(
    start,
    classes.root_1,
    classes.root_2,
    classes.root_3,
    classes.root_4,
  );

  return (
    <div className={`${classes.root} ${planetClassName}`}>
      <Lesson data={data} />
    </div>
  );
}
