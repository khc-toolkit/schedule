// libs
import { Link } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaLink } from "react-icons/fa6";
import { LuBookText } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";

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
        <span> Անհատականի մատերիալ</span>
        <FaLink size="2.3rem" />

        {isShowPersonalTasksUpdate && <NotificationCircle />}
      </Link>

      <Link className={`border ${classes.link}`} to={ROUTES.LECTURES}>
        Դասախոսներ
        <LiaChalkboardTeacherSolid size="2.5rem" />
      </Link>

      <Link className={`border ${classes.link}`} to={ROUTES.WEEK_ITEMS_COUNT}>
        Շաբաթական դասաժամերի քանակ
        <LuBookText size="2.3rem" />
      </Link>

      <Link
        to={ROUTES.INFO}
        onClick={updateInfoVersion}
        className={`border ${classes.link}`}
      >
        <span>Թարմացումներ</span>
        <BsInfoCircle size="2.2rem" />
        {isShowInfoUpdate && <NotificationCircle />}
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
