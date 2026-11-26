// libs
import { Link } from "react-router-dom";
import { GrStorage } from "react-icons/gr";

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
    </div>
  );
}
