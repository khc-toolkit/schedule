// styles
import classes from './styles.module.css';

export default function DoubleEventChanger({ isWaitingEvent, setIsWaitingEvent }) {
  const onClick = () => setIsWaitingEvent(prev => !prev);
  
  return (
    <button className={classes.root} onClick={onClick}>
      <div>
        <p className={classes.statusText}>{isWaitingEvent ? "Ակնկալվող" : "Ավարտված"} </p>
      </div>

      <div className={classes.statusBox}>
        <div className={`${classes.point} ${isWaitingEvent && classes.pointActive}`}></div>
        <div className={`${classes.point} ${!isWaitingEvent && classes.pointActive}`}></div>
      </div>
    </button>
  )
}