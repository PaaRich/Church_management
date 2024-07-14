/* eslint-disable react/prop-types */
//import React from 'react'

//import BarChart from "../../Reusable/BarChart";
import { useLocation } from "react-router-dom";

const Profile = () => {
  //const { person } = useParams();
  const location = useLocation();
  const personData = location.state;
  return (
    <div>
      <div className="c-profile flex justify-between border-b-2 border-b-black h-3/6">
        <div className="w-1/2 h-full">
          <div>
            <p>First Name</p>
            <p className="font-light">{personData.person}</p>
          </div>
          <div>
            <p>Last Name</p>
            <p>{personData.lastName}</p>
          </div>
          <div>
            <p>Date Joined</p>
            <p>{personData.dateJoined}</p>
          </div>
          <div>
            <p>Marital Status</p>
            <p>{personData.maritalStatus}</p>
          </div>
        </div>
        <div className="w-1/2 text-end">
          <div className="flex flex-col text-right items-end">
            <img
              className="h-24 w-24 mb-4"
              src="../../../../public/images/avatar2.webp"
              alt=""
            />
            <div className="my-3">
              <p>Position</p>
              <p>{personData.position}</p>
            </div>
            <div>
              <p>Status</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2/6">Graph</div>
      <div className="h-1/6">Label</div>
    </div>
  );
};

export default Profile;
