// components
import PersonalTask from "../../components/PersonalTask";

// constants
import PERSONAL_TASKS from "../../constants/personalTasks";

// styles
import classes from "./styles.module.css";

export default function TasksPage() {
  return (
    <div className={classes.root}>
      <div className={classes.tasks}>
        {PERSONAL_TASKS.map((task, ind) => (
          <PersonalTask key={ind} data={task} />
        ))}
      </div>
    </div>
  );
}
