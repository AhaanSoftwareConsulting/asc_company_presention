import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import WelcomeScreen from "./intro/WelcomeScreen";
import DoorOpening from "./intro/DoorOpening";

import CompanyProfile from "./components/CompanyProfile";
import TeamDetails from "./components/TeamDetails";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showDoors, setShowDoors] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  /* =========================================
     ENTER COMPANY PROFILE
  ========================================== */

  const handleEnter = () => {
    setShowWebsite(true);
    setShowWelcome(false);
    setShowDoors(true);
  };

  /* =========================================
     DOOR ANIMATION COMPLETE
  ========================================== */

  const handleDoorComplete = () => {
    setShowDoors(false);
  };

  /* =========================================
     BODY SCROLL CONTROL
  ========================================== */

  useEffect(() => {
    if (showWelcome || showDoors) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome, showDoors]);

  return (
    <BrowserRouter>
      {/* =====================================
          WELCOME SCREEN
      ===================================== */}

      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {/* =====================================
          DOOR OPENING
      ===================================== */}

      <AnimatePresence>
        {showDoors && (
          <DoorOpening
            onComplete={handleDoorComplete}
          />
        )}
      </AnimatePresence>

      {/* =====================================
          WEBSITE ROUTES
      ===================================== */}

      {showWebsite && (
        <Routes>
          {/* Main Company Profile */}
          <Route
            path="/"
            element={<CompanyProfile />}
          />

          {/* Team Member Details */}
          <Route
            path="/team/:uniqueId"
            element={<TeamDetails />}
          />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;