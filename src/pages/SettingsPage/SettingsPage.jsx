// libs
import { Link } from "react-router-dom";
import { GrStorage } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";

// components
import SettingsOption from "../../components/SettingsOption";
import NotificationCircle from "../../components/NotificationCircle";

// hooks
import useVersion from "../../customHooks/useVersion";

// constants
import routes from "../../constants/routes";
import VERSIONS from "../../constants/versions";
import SETTINGS from "../../constants/settings";

// styles
import classes from "./styles.module.css";

export default function SettingsPage() {
  const [isShowInfoUpdate, updateInfoVersion] = useVersion(
    VERSIONS.INFO.key,
    VERSIONS.INFO.version,
  );

  const { optionsValues, optionsKeys } = SETTINGS;

  return (
    <div className={classes.root}>
      {optionsKeys.map((optionKey) => (
        <SettingsOption
          optionData={optionsValues[optionKey]}
          optionKey={optionKey}
          key={optionKey}
        />
      ))}

      <Link to={routes.STORAGE} className={classes.link}>
        <span>Տվյալներ</span>
        <GrStorage size="2.3rem" />
      </Link>

      <Link
        to={routes.INFO}
        onClick={updateInfoVersion}
        className={classes.link}
      >
        <span>Ինֆո</span>
        <BsInfoCircle size="2.3rem" />
        {isShowInfoUpdate && <NotificationCircle />}
      </Link>
    </div>
  );
}
