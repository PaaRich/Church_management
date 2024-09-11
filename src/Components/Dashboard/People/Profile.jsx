/* eslint-disable react/prop-types */
//import React from 'react'

//import BarChart from "../../Reusable/BarChart";
import { useLocation } from "react-router-dom";

const Profile = () => {
  //const { person } = useParams();
  const location = useLocation();
  const personData = location.state;
  return (
    <div className="px-3">
      <div className="c-profile flex justify-between border-b-2 border-b-black h-3/6">
        <div className="w-1/2 h-full">
          <div>
            <p className="font-semibold">First Name</p>
            <p className="font-light">{personData.firstname}</p>
          </div>
          <div>
            <p className="font-semibold">Last Name</p>
            <p>{personData?.lastname}</p>
          </div>
          <div>
            <p className="font-semibold">Date Joined</p>
            <p>{new Date(personData?.createdAt).toLocaleString("en-US") }</p>
          </div>
          <div>
            <p className="font-semibold">Marital Status</p>
            <p>{personData?.marital_status}</p>
          </div>
          <div>
            <p className="font-semibold">Phone Number</p>
            <p>{personData?.phonenumber}</p>
          </div>
          <div>
            <p className="font-semibold">Age</p>
            <p>{personData?.age}</p>
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
              <p className="font-semibold">Status</p>
              <p>{personData.role}</p>
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
