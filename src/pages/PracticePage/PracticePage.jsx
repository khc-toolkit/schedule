// components
import ShowWeekPractice from "../../components/ShowWeekPractice";
import EmptyMessage from "../../components/EmptyMessage";

//constats
import appModes, { defaultMode } from "../../constants/appModes.js";

// styles
import classes from "./styles.module.css";

export default function PracticePage() {
  if (defaultMode !== appModes.PRACTICE) {
    return <EmptyMessage text={"Չկա պրակտիկա"} />;
  }

  return (
    <div className={classes.root}>
      <ShowWeekPractice />
    </div>
  );
}
