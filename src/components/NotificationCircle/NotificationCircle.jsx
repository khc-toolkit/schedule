// styles
import classes from "./styles.module.css";

export default function NotificationCircle({ isLeftSide = false }) {
  return (
    <div className={`${classes.root} ${isLeftSide && classes.leftSide}`}></div>
  );
}
