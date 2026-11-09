// libs
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import PracticePage from "./pages/PracticePage";
import SchedulePage from "./pages/SchedulePage";
import ThemePage from "./pages/ThemePage";
import EventsPage from "./pages/EventsPage";
import ScheduleWeekPage from "./pages/ScheduleWeekPage";
import StoragePage from "./pages/StoragePage";
import InfoPage from "./pages/InfoPage";

// components
import Navigation from "./components/Navigation";

// custom hooks
import useTheme from "./customHooks/useTheme";

// constants
import routes from "./constants/routes";
import { defaultRoute } from "./constants/routes";

// general styles
import "./app.css";

function App() {
  const [theme] = useTheme();

  useEffect(() => {
    document.body.classList = ["colors_default"];
    document.body.classList.add(theme);
  }, []);

  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<HomePage />}>
          <Route index element={<Navigate to={defaultRoute} />} />

          <Route path={routes.PRACTICE} element={<PracticePage />} />
          <Route path={routes.SCHEDULE} element={<SchedulePage />} />
          <Route path={routes.SCHEDULE_WEEK} element={<ScheduleWeekPage />} />
          <Route path={routes.EVENTS} element={<EventsPage />} />
          <Route path={routes.SETTINGS} element={<SettingsPage />} />
          <Route path={routes.THEME} element={<ThemePage />} />
          <Route path={routes.STORAGE} element={<StoragePage />} />
          <Route path={routes.INFO} element={<InfoPage />} />
        </Route>
      </Routes>

      <Navigation />
    </div>
  );
}

export default App;
