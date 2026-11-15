// compnents
import Updates from "../../components/Updates";

// utils
import timeFormat from "../../utils/timeFormat";

// constants
import updates from "../../updates/latest.js";

// styles
import classes from "./styles.module.css";

export default function InfoPage() {
  const { lastUpdateAt } = updates;

  return (
    <div className={classes.root}>
      <div className={`border ${classes.lastUpdateDateContainer}`}>
        <p className={classes.lastUpdateDate}>Թարմացվել է</p>
        <p className={classes.lastUpdateDate}>
          {timeFormat(lastUpdateAt)} առաջ
        </p>
      </div>

      <Updates />
    </div>
  );
}
