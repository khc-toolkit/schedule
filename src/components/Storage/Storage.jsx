// libs
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

// constants
import SETTINGS from "../../constants/settings";
import VERSIONS from "../../constants/versions";

// styles
import classes from "./styles.module.css";

export default function Storage() {
  const [storageLength, setStorageLength] = useState(localStorage.length);
  const { optionsValues, optionsKeys } = SETTINGS;

  const whiteListKeys = new Set();

  optionsKeys.forEach((key) => whiteListKeys.add(optionsValues[key].key));
  Object.keys(VERSIONS).forEach((key) => whiteListKeys.add(VERSIONS[key].key));

  const storageKeys = [];
  const unUseKeys = [];

  Object.keys(localStorage).forEach((key) => {
    if (whiteListKeys.has(key)) {
      storageKeys.push(key);
    } else {
      unUseKeys.push(key);
    }
  });

  storageKeys.sort();

  const isHasUnusedKeys = unUseKeys.length > 0;

  const onClearUnusedStorage = () => {
    if (unUseKeys.length === 0) {
      return alert("Ջնջելու տվյալներ չկան");
    }

    if (
      window.confirm(
        "Համոզվա՞ծ եք, որ ցանկանում եք ջնջել չօգտագործվող տվյալները։",
      )
    ) {
      unUseKeys.forEach((key) => localStorage.removeItem(key));
      setStorageLength(localStorage.length);
    }
  };

  const onClearStorage = () => {
    if (storageLength === 0) {
      return alert("Ջնջելու տվյալներ չկան");
    }

    if (
      window.confirm("Համոզվա՞ծ եք, որ ցանկանում եք ջնջել բոլոր տվյալները։")
    ) {
      localStorage.clear();
      setStorageLength(0);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.values}>
        {storageKeys.length > 0 &&
          storageKeys.map((key) => (
            <div key={key} className={`border ${classes.keyContainer}`}>
              <p className={classes.key}>{key}</p>
              <p className={classes.value}>{localStorage.getItem(key)}</p>
            </div>
          ))}

        {isHasUnusedKeys && (
          <div className={`border ${classes.keyContainer}`}>
            <p className={classes.unusableData}>
              Գտնվել է չօգտագործվող տվյալ ({unUseKeys.length})
            </p>
          </div>
        )}
      </div>

      <div>
        {isHasUnusedKeys && (
          <button
            onClick={onClearUnusedStorage}
            className={`border ${classes.deleteButton}`}
          >
            <RiDeleteBin6Line /> Ջնջել միայն չօգտագործվող տվյալները
          </button>
        )}

        <button
          onClick={onClearStorage}
          className={`border ${classes.deleteButton}`}
        >
          <RiDeleteBin6Line /> Ջնջել բոլոր տվյալները
        </button>
      </div>
    </div>
  );
}
