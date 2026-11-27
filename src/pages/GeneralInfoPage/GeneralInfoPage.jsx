// libs
import { Link } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaLink } from "react-icons/fa6";
import { LuBookText } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";

// components
import NotificationCircle from "../../components/NotificationCircle";

// hooks
import useVersion from "../../customHooks/useVersion";

// constants
import ROUTES from "../../constants/routes";
import VERSIONS from "../../constants/versions";

// styles
import classes from "./styles.module.css";

export default function GeneralInfoPage() {
  const [isShowInfoUpdate, updateInfoVersion] = useVersion(
    VERSIONS.INFO.key,
    VERSIONS.INFO.version,
  );

  const [isShowPersonalTasksUpdate, setIsShowPersonalTasks] = useVersion(
    VERSIONS.PERSONAL_TASKS.key,
    VERSIONS.PERSONAL_TASKS.version,
  );

  return (
    <div className={classes.root}>
      <Link
        className={`border ${classes.link}`}
        to={ROUTES.TASKS}
        onClick={setIsShowPersonalTasks}
      >
        <div className={classes.leftSection}>
          <FaLink size="1.8rem" />
          <p>Անհատականի մատերիալ</p>
          {isShowPersonalTasksUpdate && <NotificationCircle />}
        </div>

        <RiArrowRightWideFill color="#afafaf" size="2rem" />
      </Link>

      <Link className={`border ${classes.link}`} to={ROUTES.LECTURES}>
        <div className={classes.leftSection}>
          <LiaChalkboardTeacherSolid size="1.8rem" />
          <p>Դասախոսներ</p>
        </div>
        <RiArrowRightWideFill color="#afafaf" size="2rem" />
      </Link>

      <Link className={`border ${classes.link}`} to={ROUTES.WEEK_ITEMS_COUNT}>
        <div className={classes.leftSection}>
          <LuBookText size="1.8rem" />
          <p>Շաբաթական դասաժամերի քանակ</p>
        </div>
        <RiArrowRightWideFill color="#afafaf" size="2.2rem" />
      </Link>

      <Link
        to={ROUTES.INFO}
        onClick={updateInfoVersion}
        className={`border ${classes.link}`}
      >
        <div className={classes.leftSection}>
          <BsInfoCircle size="1.8rem" />
          <p>Թարմացումներ</p>
        </div>
        {isShowInfoUpdate && <NotificationCircle />}
        <RiArrowRightWideFill color="#afafaf" size="2rem" />
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
