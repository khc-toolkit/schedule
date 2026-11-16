// libs
import { useEffect, useState } from "react";

// utils
import getDateTime from "../../utils/getDateTime";
import timerFormat from "../../utils/timerFormat";

// styles
import classes from "./styles.module.css";

export default function BeforeClass({ startedTime }) {
  const [timer, setTimer] = useState(null);

  const calculateTimer = () => {
    const startTime = getDateTime(startedTime);
    const currentTime = new Date().getTime();
    setTimer(Math.floor((startTime - currentTime) / 1000));
  };

  useEffect(() => {
    calculateTimer();

    const intervalId = setInterval(calculateTimer, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={classes.root}>
      <p className={classes.title}>Առաջին դասը կսկսվի ժամը {startedTime}-ին </p>
      <p>{timerFormat(timer)}</p>
    </div>
  );
}
