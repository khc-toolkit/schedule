// libs
import { useState } from "react";

// components
import Update from "../Update";

// constants
import updates from "../../constants/updates";

// styles
import classes from "./styles.module.css";

export default function Updates() {
  const [isShowOldUpdates, setIsShowUpdates] = useState(false);
  const { versions } = updates;

  const alwaysShowingUpdates = versions.slice(0, 3);
  const hiddenUpdates = versions.slice(3, versions.length);

  return (
    <div className={classes.root}>
      <div className={classes.versions}>
        {
          alwaysShowingUpdates.map((version, ind) => 
            <Update data={version} key={ind} />
          )
        }

        {isShowOldUpdates ? (
          hiddenUpdates.map((version, ind) => (
            <Update key={ind} data={version} />
          ))
        ) : (
          <button className={classes.button} onClick={() => setIsShowUpdates(true)}>Տեսնել ավելի հին թարմացումները</button>
        )}
      </div>
    </div>
  );
}
