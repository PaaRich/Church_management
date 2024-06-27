import React from "react";
import { NavLink } from "react-router-dom";
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

const SideBar = () => {
  return (
    <div className="sidebar--items">
      <img
        className="rounded-full w-[40%] mb-4 mt-2 ml-4"
        src="./images/avatar2.webp"
        alt="avartar"
      />
      <ul className="mb-5">
        <li>
          <NavLink className="flex items-center gap-3">
            <IoPerson color="#fff" size={25} />
            Poeple
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-3">
            <LuFileEdit color="#fff" size={25} />
            Forms
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-3">
            <MdOutlineFingerprint color="#fff" size={25} />
            Attendance
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-3">
            <TbReport color="#fff" size={25} />
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-3">
            <IoIosPeople color="#fff" size={25} />
            Mustard Seed
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-3">
            <TbUsersGroup color="#fff" size={25} />
            Ministries
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-3">
            <PiChalkboardTeacherDuotone color="#fff" size={25} />
            Coaching
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-3">
            <GiTeacher color="#fff" size={25} />
            Foundation School
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center gap-3">
            <TbMessageCircleDown color="#fff" size={25} />
            Communication
          </NavLink>
        </li>
      </ul>
      <button className="flex items-center gap-3 text-white mt-7 ml-4">
        <BiLogOut color="#fff" size={25} />
        Logout
      </button>
    </div>
  );
};

export default SideBar;
