// libs
import { Link, useLocation } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { FaClock } from "react-icons/fa6";
import { BsCalendar4Week, BsCalendar2WeekFill } from "react-icons/bs";
import { GoCommandPalette } from "react-icons/go";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";

// components
import NotificationCircle from "../NotificationCircle";

// custom hooks
import useVersion from "../../customHooks/useVersion";

// constants
import routes from "../../constants/routes";
import VERSIONS from "../../constants/versions";
import appModes, { defaultMode } from "../../constants/appModes";

// styles
import classes from "./styles.module.css";

export default function Navigation() {
  const [isEventsUpdated, updateEvents] = useVersion(
    VERSIONS.EVENTS.key,
    VERSIONS.EVENTS.version,
  );
  const [isSettingsUpdated, updateSettings] = useVersion(
    VERSIONS.SETTINGS.key,
    VERSIONS.SETTINGS.version,
  );

  const [isGenInfoUPdated, updateGenInfo] = useVersion(
    VERSIONS.GENERAL_INFO.key,
    VERSIONS.GENERAL_INFO.version,
  );

  const { pathname } = useLocation();

  const isScheduleMode = defaultMode === appModes.SCHEDULE;
  const isPracticeMode = defaultMode === appModes.PRACTICE;
  const isOfflineMode = defaultMode === appModes.OFFLINE;

  const panelGridColumns = isScheduleMode
    ? 4
    : isPracticeMode
      ? 3
      : isOfflineMode && 2;

  const panelStyles = {
    gridTemplateColumns: `repeat(${panelGridColumns}, 1fr)`,
  };

  const isScheduleRouter = pathname === routes.SCHEDULE;
  const isScheduleWeekRouter = pathname === routes.SCHEDULE_WEEK;
  const isPracticeRouter = pathname === routes.PRACTICE;
  const isEventsRouter = pathname === routes.EVENTS;
  const isSettingsRouter = pathname === routes.SETTINGS;
  const isGeneralInfoRouter = pathname === routes.GENERAL_INFO;

  return (
    <div className={classes.root}>
      <div className={classes.panel} style={panelStyles}>
        {isScheduleMode && (
          <>
            <Link
              to={routes.SCHEDULE}
              className={`${classes.button} ${isScheduleRouter && classes.activeTab}`}
            >
              {isScheduleRouter ? <FaClock /> : <FiClock />}
            </Link>

            <Link
              to={routes.SCHEDULE_WEEK}
              className={`${classes.button} ${isScheduleWeekRouter && classes.activeTab}`}
            >
              {isScheduleWeekRouter ? (
                <BsCalendar2WeekFill size={36} />
              ) : (
                <BsCalendar4Week size={36} />
              )}
            </Link>
          </>
        )}

        {isPracticeMode && (
          <Link
            to={routes.PRACTICE}
            className={`${classes.button} ${isPracticeRouter && classes.activeTab}`}
          >
            <GoCommandPalette />
          </Link>
        )}

        {isEventsRouter && (
          <Link
            to={routes.EVENTS}
            onClick={updateEvents}
            className={`${classes.button} ${isEventsRouter && classes.activeTab}`}
          >
            {isEventsRouter ? <FaStar size={41} /> : <FiStar />}
            {isEventsUpdated && <NotificationCircle />}
          </Link>
        )}

        <Link
          to={routes.GENERAL_INFO}
          onClick={updateGenInfo}
          className={`${classes.button} ${isGeneralInfoRouter && classes.activeTab}`}
        >
          {isGeneralInfoRouter ? <RiContactsFill /> : <RiContactsLine />}
          {isGenInfoUPdated && <NotificationCircle />}
        </Link>

        <Link
          to={routes.SETTINGS}
          onClick={updateSettings}
          className={`${classes.button} ${isSettingsRouter && classes.activeTab}`}
        >
          {isSettingsRouter ? <IoSettingsSharp /> : <IoSettingsOutline />}
          {isSettingsUpdated && <NotificationCircle />}
        </Link>
      </div>
    </div>
  );
}
