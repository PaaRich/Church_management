//import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineFingerprint } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { TbMessageCircleDown } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { useState } from "react";
import "./DashboardMain.css";

const SideBar = () => {
  const [dropReport, setDropReport] = useState(false);
  const [dropComplain, setDropComplain] = useState(false);
  return (
    <div
      className="sidebar--items"
      // onClick={() => {
      //   dropComplain && setDropComplain(false);
      //   dropReport && setDropReport(false);
      // }}
    >
      <img
        className="rounded-full w-[35%] mb-4 mt-2 ml-4"
        src="/images/avatar2.webp"
        alt="avartar"
      />

      <ul className="overflow-auto -z-50">
        <li>
          <Link to={"/dashboard"} className="flex items-center gap-3">
            <IoPerson color="#fff" size={25} />
            Dashboard
          </Link>
        </li>
        <li>
          <NavLink to={"/dashboard/people"} className="flex items-center gap-3">
            <IoPerson color="#fff" size={25} />
            Poeple
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/forms"} className="flex items-center gap-3">
            <LuFileEdit color="#fff" size={25} />
            Forms
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/attendance"}
            className="flex items-center gap-3"
          >
            <MdOutlineFingerprint color="#fff" size={25} />
            Attendance
          </NavLink>
        </li>
        <li>
          <Link
            to={"/dashboard/reports/attendance"}
            className="flex items-center gap-3"
            onClick={() => setDropReport(!dropReport)}
          >
            <TbReport color="#fff" size={25} />
            Reports
          </Link>
          {dropReport && (
            <div className="flex flex-col ml-10">
              <NavLink
                to="/dashboard/reports/attendance"
                className="hover:text-black active:text-black"
              >
                Attendance
              </NavLink>
              <NavLink
                to={"/dashboard/reports/workers"}
                className="hover:text-black active:text-black "
              >
                Workers
              </NavLink>
            </div>
          )}
        </li>
        <li>
          <NavLink
            to={"/dashboard/mustard_seed"}
            className="flex items-center gap-3"
          >
            <IoIosPeople color="#fff" size={25} />
            Mustard Seed
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/ministries"}
            className="flex items-center gap-3"
          >
            <TbUsersGroup color="#fff" size={25} />
            Ministries
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/coaching"}
            className="flex items-center gap-3"
            onClick={() => setDropComplain(!dropComplain)}
          >
            <PiChalkboardTeacherDuotone color="#fff" size={25} />
            Coaching
          </NavLink>
          {dropComplain && (
            <NavLink className="block ml-10" to={"complains"}>
              Complains
            </NavLink>
          )}
        </li>
        <li>
          <NavLink to={"/dashboard/school"} className="flex items-center gap-3">
            <GiTeacher color="#fff" size={25} />
            Foundation School
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/communications"}
            className="flex items-center gap-3"
          >
            <TbMessageCircleDown color="#fff" size={25} />
            Communication
          </NavLink>
        </li>
      </ul>
      <button className="flex items-center gap-3 text-white px-4 py-3 bg-blue-500 hover:bg-blue-500/60 w-full">
        <BiLogOut color="#030303" size={25} />
        Logout
      </button>
    </div>
  );
};

export default SideBar;
