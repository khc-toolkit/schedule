// libs
import { Link } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaLink } from "react-icons/fa6";
import { LuBookText } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";

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

  return (
    <div className={classes.root}>
      <Link className={`border ${classes.link}`} to={ROUTES.TASKS}>
        <span> Անհատականի մատերիալ</span>
        <FaLink size="2.3rem" />
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
    </div>
  );
}
