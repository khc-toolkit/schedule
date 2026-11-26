// libs
import { Link } from "react-router-dom";

// assets
import googleDriveImg from "../../assets/img/google_drive.png";

// styles
import classes from "./styles.module.css";

export default function PersonalTask({ data }) {
  const { title, link, shouldOnline } = data;

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>{title}</h3>

      {link ? (
        <Link to={link} target="_blank" className={classes.driveLink}>
          <img
            src={googleDriveImg}
            alt="drive-logo"
            className={classes.driveIcon}
          />
          <span>Google Drive</span>
        </Link>
      ) : (
        <div className={classes.notReady}>
          <p>Պատրաստ չի</p>
        </div>
      )}

      {shouldOnline && (
        <div className={classes.sendOnline}>
          <p>Ուղարկում ենք օնլայն</p>
        </div>
      )}
    </div>
  );
}
