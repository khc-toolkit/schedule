// libs
import { Link } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaLink } from "react-icons/fa6";
import { LuBookText } from "react-icons/lu";

// constants
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function GeneralInfoPage() {
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
    </div>
  );
}
