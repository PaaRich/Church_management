import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
//import Dropdown from "../Reusable/DropDown";
import { IoPerson } from "react-icons/io5";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineFingerprint } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { IoIosArrowDown, IoIosPeople, IoIosSettings } from "react-icons/io";
import { TbMessageCircleDown } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import "./DashboardMain.css";

const SideBar = () => {
  const [dropReport, setDropReport] = useState(false);
  const [dropComplain, setDropComplain] = useState(false);
  const dropDownRef = useRef(null);
  const dropDownCoachRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setDropReport(false);
    }
    if (
      dropDownCoachRef.current &&
      !dropDownCoachRef.current.contains(event.target)
    ) {
      setDropComplain(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <RxDashboard color="#fff" size={25} />
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
        {/* <Dropdown options={options} placeholder="Select an option" /> */}

        <li ref={dropDownRef}>
          <Link
            to={"/dashboard/reports/attendance"}
            className="flex items-center gap-3 peer"
            onClick={() => setDropReport(!dropReport)}
          >
            <TbReport color="#fff" size={25} />
            <div className="flex justify-between items-center w-full">
              Reports
              <IoIosArrowDown
                size={20}
                className={`${dropReport && "rotate-180"}`}
              />
            </div>
          </Link>
          <div
            //className="flex flex-col ml-10"
            className={`${
              dropReport ? "drop--down" : "drop--Up"
            } flex flex-col ml-10 duration-500 `}
          >
            <NavLink className="child" to="/dashboard/reports/attendance">
              Attendance
            </NavLink>
            <NavLink className="child" to={"/dashboard/reports/workers"}>
              Workers
            </NavLink>
          </div>
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
        <li ref={dropDownCoachRef}>
          <NavLink
            to={"/dashboard/coaching"}
            className="flex items-center gap-3"
            onClick={() => setDropComplain(!dropComplain)}
          >
            <PiChalkboardTeacherDuotone color="#fff" size={25} />
            <div className="flex items-center justify-between w-full">
              Coaching
              <IoIosArrowDown
                size={21}
                className={`${dropComplain && "rotate-180"}`}
              />
            </div>
          </NavLink>
          <div
            className={`${dropComplain ? "drop--down-c" : "drop--Up-c"} ml-10`}
          >
            <NavLink to={"complains"} className="block child">
              Complains
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink to={"/dashboard/school"} className="flex items-center gap-3">
            <GiTeacher color="#fff" size={25} />
            Foundation School
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/setting"}
            className="flex items-center gap-3"
          >
            {/* change this icon */}
            <IoIosSettings color="#fff" size={25} />
            Settings
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
