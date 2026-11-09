// copmonents
import ShowWeekLessons from "../../components/ShowWeekLessons";
import EmptyMessage from "../../components/EmptyMessage";

// constants
import appModes, { defaultMode } from "../../constants/appModes";

// styles
import classes from "./styles.module.css";

export default function ScheduleWeekPage() {
  if (defaultMode !== appModes.SCHEDULE) {
    return <EmptyMessage text={"Չկա դասացուցակ"} />;
  }

  return (
    <div className={classes.root}>
      <ShowWeekLessons />
    </div>
  );
}
