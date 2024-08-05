//import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Components/Dashboard/DashBoard";
import DashBoardHome from "./Components/Dashboard/DashBoardHome";
import People from "./Components/Dashboard/People/People";
import Forms from "./Components/Dashboard/Forms/Forms";
import Attendance from "./Components/Dashboard/Attendance/Attendance";
import Reports from "./Components/Dashboard/Reports/Reports";
import Workers from "./Components/Dashboard/Reports/Workers";
import Mustard from "./Components/Dashboard/Mustard/Mustard";
import Chapter from "./Components/Dashboard/Mustard/Chapter";
import Ministries from "./Components/Dashboard/Ministries/Ministries";
import Ministry from "./Components/Dashboard/Ministries/Ministry";
import Coaching from "./Components/Dashboard/Coaching/Coaching";
import LogComplain from "./Components/Dashboard/Coaching/LogComplain";
import Complains from "./Components/Dashboard/Coaching/Complains";
import SpecificComplain from "./Components/Dashboard/Coaching/SpecificComplain";
import School from "./Components/Dashboard/School/School";
import Communications from "./Components/Dashboard/Communications/Communications";
import Profile from "./Components/Dashboard/People/Profile";
import Homepage from "./Components/Home/Homepage";
import Exams from "./Components/Dashboard/School/Exams";
import Lessons from "./Components/Dashboard/School/Lessons";
import ExamQue from "./Components/Dashboard/School/ExamQue";
import Cert from "./Components/Dashboard/School/Cert";
// eslint-disable-next-line no-unused-vars
import Login from "./Components/Login/Login";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://127.0.0.1:5000/api/v1";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          transition={"flip"}
        />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/dashboard"
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
            path="/dashboard/people/:person"
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
            path="/dashboard/reports/attendance"
            element={
              <DashBoard>
                <Reports />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/reports/workers"
            element={
              <DashBoard>
                <Workers />
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
            path="/dashboard/mustard_seed/:id"
            element={
              <DashBoard>
                <Chapter />
              </DashBoard>
            }
          >
            <Route path=":person" element={<Profile />} />
          </Route>

          <Route
            path="/dashboard/ministries"
            element={
              <DashBoard>
                <Ministries />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/ministries/:id"
            element={
              <DashBoard>
                <Ministry />
              </DashBoard>
            }
          >
            <Route path=":person" element={<Profile />} />
          </Route>
          <Route
            path="/dashboard/coaching"
            element={
              <DashBoard>
                <Coaching />
              </DashBoard>
            }
          >
            <Route index element={<LogComplain />} />
            <Route path="complains" element={<Complains />} />
          </Route>
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
            path="/dashboard/school/lessons"
            element={
              <DashBoard>
                <Lessons />
              </DashBoard>
            }
          />
          <Route
            path="/dashboard/school/exams"
            element={
              <DashBoard>
                <Exams />
              </DashBoard>
            }
          >
            <Route index element={<ExamQue />} />
            <Route path="cert" element={<Cert />} />
          </Route>
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
