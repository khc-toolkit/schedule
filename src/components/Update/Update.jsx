// libs
import React from "react";

// constants
import { listTypes } from "../../updates/latest";

// styles
import classes from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Update({ data }) {
  const { version, list } = data;

  return (
    <div className={`border ${classes.root}`}>
      <h2 className={classes.version}>{version}</h2>

      <div className={classes.list}>
        {list.map(([type, content], ind) => (
          <React.Fragment key={ind}>
            {type === listTypes.text && (
              <p className={classes.text}>{content}</p>
            )}

            {type === listTypes.img && (
              <img className={classes.preview} src={content} alt="preview" />
            )}

            {type === listTypes.link && (
              <Link className={`border ${classes.link}`} to={content[0]}>
                {content[1]}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
