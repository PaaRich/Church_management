//import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Components/Dashboard/DashBoard";
import DashBoardHome from "./Components/Dashboard/DashBoardHome";
import People from "./Components/Dashboard/People/People";
import Forms from "./Components/Dashboard/Forms/Forms";
import Attendance from "./Components/Dashboard/Attendance/Attendance";
import Reports from "./Components/Dashboard/Reports/Reports";
import Mustard from "./Components/Dashboard/Mustard/Mustard";
import Ministries from "./Components/Dashboard/Ministries/Ministries";
import Coaching from "./Components/Dashboard/Coaching/Coaching";
import SpecificComplain from "./Components/Dashboard/Coaching/SpecificComplain";
import School from "./Components/Dashboard/School/School";
import Communications from "./Components/Dashboard/Communications/Communications";
import Profile from "./Components/Dashboard/People/Profile";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <DashBoard>
                <DashBoardHome />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/people"
            element={
              <DashBoard>
                <People />
              </DashBoard>
            }
          />
          {/* render profile  start*/}
          <Route
            path="/dashboard/people/profile"
            element={
              <DashBoard>
                <People>
                  <Profile />
                </People>
              </DashBoard>
            }
          />
          {/* render profile end*/}
          <Route
            path="/dashboard/forms"
            element={
              <DashBoard>
                <Forms />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/attendance"
            element={
              <DashBoard>
                <Attendance />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/reports"
            element={
              <DashBoard>
                <Reports />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/mustard_seed"
            element={
              <DashBoard>
                <Mustard />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/ministries"
            element={
              <DashBoard>
                <Ministries />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/coaching"
            element={
              <DashBoard>
                <Coaching />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/coaching/specific_complains"
            element={
              <DashBoard>
                <SpecificComplain />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/school"
            element={
              <DashBoard>
                <School />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/communications"
            element={
              <DashBoard>
                <Communications />
              </DashBoard>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
