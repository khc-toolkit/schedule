// libs
import { Outlet } from "react-router-dom";

// components
import Header from "../../components/Header";
import Snowfall from "../../components/Snowfall";

// hooks
import useSettingsOption from "../../customHooks/useSettingsOption";

// config
import SETTINGS from "../../constants/settings";

// styles
import classes from "./styles.module.css";

const { optionsValues } = SETTINGS;

export default function HomePage() {
  const [isHideSnowFall] = useSettingsOption(optionsValues.new_year_snowfall);

  return (
    <div className={classes.root}>
      <Header />
      <Outlet />
      {!isHideSnowFall && <Snowfall />}
    </div>
  );
}
