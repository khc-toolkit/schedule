// libs
import { useState } from "react";

// components
import Update from "../Update";

// constants
import updates from "../../updates/latest";

// styles
import classes from "./styles.module.css";

export default function Updates() {
  const [versions, setVersions] = useState(updates.versions);

  const loadUpdates = async () => {
    const { default: updates } = await import("../../updates/updates-2026");
    setVersions((prev) => [...prev, ...updates]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.versions}>
        {versions.map((version, ind) => (
          <Update data={version} key={ind} />
        ))}

        {versions.length === 3 && (
          <button className={`border ${classes.button}`} onClick={loadUpdates}>
            Տեսնել ավելի հին թարմացումները
          </button>
        )}
      </div>
    </div>
  );
}
