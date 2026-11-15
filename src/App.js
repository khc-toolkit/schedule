// libs
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// pages
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import PracticePage from "./pages/PracticePage";
import SchedulePage from "./pages/SchedulePage";
import EventsPage from "./pages/EventsPage";
import ScheduleWeekPage from "./pages/ScheduleWeekPage";
import StoragePage from "./pages/StoragePage";
import GeneralInfoPage from "./pages/GeneralInfoPage";

// components
import Navigation from "./components/Navigation";

// constants
import routes from "./constants/routes";
import { defaultRoute } from "./constants/routes";

// general styles
import "./app.css";

const InfoPage = lazy(() => import("./pages/InfoPage"));

function App() {
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
          <Route path={routes.STORAGE} element={<StoragePage />} />
          <Route
            path={routes.INFO}
            element={
              <Suspense
                fallback={
                  <div
                    className="border"
                    style={{
                      padding: "20px 0",
                      textAlign: "center",
                      background: "var(--bg-contrast)",
                      borderRadius: 10,
                    }}
                  >
                    Բեռնում․․
                  </div>
                }
              >
                <InfoPage />
              </Suspense>
            }
          />
          <Route path={routes.GENERAL_INFO} element={<GeneralInfoPage />} />
        </Route>
      </Routes>

      <Navigation />
    </div>
  );
}

export default App;
