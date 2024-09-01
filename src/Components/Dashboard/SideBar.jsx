import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
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
import { ImProfile } from "react-icons/im";
import "./DashboardMain.css";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUser,
} from "../../Redux/features/auth/authSlice";
import Loader from "../Reusable/Loader";

const SideBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const [dropJPK, setDropJPK] = useState(false);
  const [dropReport, setDropReport] = useState(false);
  const [dropComplain, setDropComplain] = useState(false);
  const dropJPKRef = useRef(null);
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
    if (dropJPKRef.current && !dropJPKRef.current.contains(event.target)) {
      setDropJPK(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = async function () {
    await dispatch(logoutUser());
    window.setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  };



  return (
    <>
      {isLoading && <Loader />}
      <div
        className="sidebar--items"
        // onClick={() => {
        //   dropComplain && setDropComplain(false);
        //   dropReport && setDropReport(false);
        // }}
      >
        <div className="flex items-center gap-5">
        <img
          className="rounded-full w-[35%] mb-4 mt-2 ml-4"
          src={props.user?.user_photo}
          alt="avartar"
        />
        <h3 className="text-white text-semibold">Welcome, {props.user?.firstname}</h3>
         </div>


        <ul className="overflow-auto -z-50">
          <li>
            <Link to={"/dashboard"} className="flex items-center gap-3">
              <RxDashboard color="#fff" size={25} />
              Dashboard
            </Link>
          </li>
          <li ref={dropJPKRef}>
            <Link
              to={"/dashboard/people"}
              className="flex items-center gap-3"
              onClick={() => setDropJPK(!dropJPK)}
            >
              <IoPerson color="#fff" size={25} />
              <div className="flex justify-between items-center w-full">
                People
                <IoIosArrowDown
                  size={20}
                  className={`${dropJPK && "rotate-180"}`}
                />
              </div>
            </Link>
            <div className={`${dropJPK ? "drop--down-c" : "drop--Up-c"} ml-10`}>
              <NavLink to={"/dashboard/people/jpk"} className="block child">
                JPK
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to={"/dashboard/profile"}
              className="flex items-center gap-3"
            >
              <ImProfile color="#fff" size={25} />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/forms"}
              className="flex items-center gap-3"
            >
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
                WorkerForce
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
              className={`${
                dropComplain ? "drop--down-c" : "drop--Up-c"
              } ml-10`}
            >
              <NavLink to={"complains"} className="block child">
                Complains
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to={"/dashboard/school"}
              className="flex items-center gap-3"
            >
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
        </ul>
        <button
          className="flex items-center gap-3 text-white px-4 py-3 bg-blue-500 hover:bg-blue-500/60 w-full"
          onClick={logout}
        >
          <BiLogOut color="#fff" size={25} />
          Logout
        </button>
      </div>
    </>
  );
};

export default SideBar;
