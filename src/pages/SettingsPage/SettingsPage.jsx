// libs
import { Link } from "react-router-dom";
import { GrStorage } from "react-icons/gr";
import { RiTelegram2Fill } from "react-icons/ri";

// components
import SettingsOption from "../../components/SettingsOption";

// constants
import routes from "../../constants/routes";
import SETTINGS from "../../constants/settings";

// styles
import classes from "./styles.module.css";

export default function SettingsPage() {
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

      <Link to={routes.STORAGE} className={`border ${classes.link}`}>
        <span>Տվյալներ</span>
        <GrStorage size="2.3rem" />
      </Link>

      <Link
        to={"https://t.me/+yX4R8wff6PQxOTIy"}
        target="_blank"
        className={`border ${classes.telegram}`}
      >
        <RiTelegram2Fill size="2.3rem" />
        <span>Telegram</span>
      </Link>
    </div>
  );
}
