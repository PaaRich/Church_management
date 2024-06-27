import React from "react";
import "./DashboardMain.css";
import { IoIosPeople, IoIosHeartEmpty } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import ProgressCircle from "../Reusable/ProgressCircle";

const DashBoardHome = () => {
  const malePercentage=38
  const femalePercentage=62
  const childrenPercentage=28
  const youthPercentage=67

  return (
    <div className="dashboard-home-container">
      {/* navbar here */}
      <div className="dashboard-home-main mt-1">
        <div className="dashboard--cards">
          <div className="dash--card shadow-lg rounded-md text-center">
            <div className="icon bg-violet-900 rounded-t-md flex items-center justify-center p-3">
              <IoIosPeople color="#fff" size={40} />
            </div>
            <div className="number my-2">
              <h2 className="text-3xl font-bold">13.5k</h2>
            </div>
            <p className="p-2">Members</p>
          </div>
          <div className="dash--card shadow-lg rounded-md text-center">
            <div className="icon bg-orange-600 rounded-t-md flex items-center justify-center p-3">
              <FaStarHalfAlt color="#fff" size={40} />
            </div>
            <div className="number my-2">
              <h2 className="text-3xl font-bold">200</h2>
            </div>
            <p className="p-2">Visitors</p>
          </div>
          <div className="dash--card shadow-lg rounded-md text-center">
            <div className="icon bg-green-500 rounded-t-md flex items-center justify-center p-3">
              <IoIosHeartEmpty color="#fff" size={40} />
            </div>
            <div className="number my-2">
              <h2 className="text-3xl font-bold">200</h2>
            </div>
            <p className="p-2">New Comers</p>
          </div>
          <div className="dash--card shadow-lg rounded-md text-center">
            <div className="icon bg-purple-500 rounded-t-md flex items-center justify-center p-3">
              <IoIosHeartEmpty color="#fff" size={40} />
            </div>
            <div className="number my-2">
              <h2 className="text-3xl font-bold">200</h2>
            </div>
            <p className="p-2">New Comers</p>
          </div>
        </div>

        {/* cards end here */}
        <div className="mt-10 grid grid-cols-4 gap-10">
          <div className="text-center">
            <ProgressCircle percentage={femalePercentage} text={`${femalePercentage}%`} />
            <h4 className="font-semibold text-md mt-5 text-xl">Female</h4>
          </div>
          <div className="text-center">
            <ProgressCircle percentage={malePercentage} text={`${malePercentage}%`} />
            <h4 className="font-semibold text-md mt-5 text-xl">Male</h4>
          </div>
          <div className="text-center">
            <ProgressCircle percentage={childrenPercentage} text={`${childrenPercentage}%`} />
            <h4 className="font-semibold text-md mt-5 text-xl">Children</h4>
          </div>
          <div className="text-center">
            <ProgressCircle percentage={youthPercentage} text={`${youthPercentage}%`} />
            <h4 className="font-semibold text-md mt-5 text-xl">Youth</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
