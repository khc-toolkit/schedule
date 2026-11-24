// styles
import classes from "./styles.module.css";

export default function PersonalTask({ data }) {
  const { itemName, task, resources } = data;

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>{itemName}</h3>
    </div>
  );
}
