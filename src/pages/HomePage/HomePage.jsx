// libs
import { Outlet } from "react-router-dom";

// components
import Header from "../../components/Header";
import Snowfall from "../../components/Snowfall";

// styles
import classes from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={classes.root}>
      <Header />
      <Outlet />
      <Snowfall />
    </div>
  );
}
