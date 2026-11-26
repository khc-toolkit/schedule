// components
import PersonalTask from "../../components/PersonalTask";

// constants
import PERSONAL_TASKS from "../../constants/personalTasks";

// styles
import classes from "./styles.module.css";

export default function TasksPage() {
  const ready = [];
  const notReady = [];

  PERSONAL_TASKS.forEach((task) => {
    if (task.link) {
      ready.push(task);
    } else {
      notReady.push(task);
    }
  });

  const result = [...ready, ...notReady];

  return (
    <div className={classes.root}>
      <div className={classes.tasks}>
        {result.map((task, ind) => (
          <PersonalTask key={ind} data={task} />
        ))}
      </div>
    </div>
  );
}
