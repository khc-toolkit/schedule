// libs
import { MdToday } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

// utils
import dateFormat from "../../utils/dateFormat";
import timeFormat from "../../utils/timeFormat";

// styles
import classes from "./styles.module.css";

export default function EventCard({ data }) {
  const { title, place, date, duration, isPrev, isExam, isDiploma } = data;

  const dateWithoutDuration = new Date(date);
  const dateWithDuration = new Date(date);
  dateWithDuration.setHours(dateWithDuration.getHours() + duration);

  const currentDate = new Date();

  const isStarted = currentDate - dateWithoutDuration > 0;
  const isFinished = currentDate - dateWithDuration > 0;
  const isFinishedAndNotPrev = isStarted && isFinished && !isPrev;

  if (isFinishedAndNotPrev) return;

  return (
    <div className={classes.root}>
      {!isPrev && (
        <div className={`${classes.timer} ${classes.withIcon}`}>
          <IoIosTimer />
          {isStarted ? <p>ՀԻՄԱ</p> : <p>Մնաց {timeFormat(date)}</p>}
        </div>
      )}

      {isExam && <p className={classes.specialTitle}>Քննություն</p>}
      {isDiploma && <p className={classes.specialTitle}>Դիպլոմային</p>}

      <p className={classes.title}>{title}</p>

      <div className={`${classes.place} ${classes.withIcon}`}>
        <MdPlace />
        <p>{place ?? "(հայտարարված չի)"}</p>
      </div>

      <div className={`${classes.date} ${classes.withIcon}`}>
        <MdToday />
        <p>{date ? dateFormat(date) : "(հայտարարված չի)"}</p>
      </div>
    </div>
  );
}
