// libs
import { useLocation } from "react-router-dom";

// constants
import routes from "../../constants/routes";

// config
import SETTINGS from "../../constants/settings";

// hooks
import useSettingsOption from "../../customHooks/useSettingsOption";

// styles
import classes from "./styles.module.css";

const { optionsValues } = SETTINGS;

export default function Header() {
  const { pathname } = useLocation();

  const routeLabels = {
    [routes.EVENTS]: "Միջոցառումներ",
    [routes.PRACTICE]: "Պրակտիկա",
    [routes.SCHEDULE]: "Դասացուցակ",
    [routes.SCHEDULE_WEEK]: "Դասացուցակ",
    [routes.SETTINGS]: "Կարգավորումներ",
    [routes.STORAGE]: "Տվյալներ",
    [routes.INFO]: "Ինֆո",
    [routes.GENERAL_INFO]: "Ընդհանուր ինֆո",
  };

  return (
    <header className={classes.root}>
      <Lights />
      <h1 className={classes.headerText}>
        {routeLabels[pathname] ?? "(none)"}
      </h1>
    </header>
  );
}

function Lights() {
  const [isOffLIghts] = useSettingsOption(optionsValues.new_year_lights);

  const lights = [
    { color: "#FF3B30", rotate: "-8", shadow: "#FF3B3080" },
    { color: "#3478F6", rotate: "6", shadow: "#3478F680" },
    { color: "#FFD60A", rotate: "-5", shadow: "#FFD60A80" },
    { color: "#34C759", rotate: "9", shadow: "#34C75980" },
    { color: "#FF3B30", rotate: "-4", shadow: "#FF3B3080" },
    { color: "#3478F6", rotate: "7", shadow: "#3478F680" },
    { color: "#FFD60A", rotate: "-9", shadow: "#FFD60A80" },
    { color: "#34C759", rotate: "9", shadow: "#34C75980" },
  ];

  return (
    <div className={classes.lights}>
      {lights.map((l, ind) => (
        <div
          className={`${classes.light} ${isOffLIghts && classes.offLights}`}
          key={ind}
          style={{
            backgroundColor: l.color,
            transform: `rotate(${l.rotate}deg)`,
            boxShadow: `0 0 15px 8px ${l.shadow}`,
          }}
        ></div>
      ))}
    </div>
  );
}
