/* eslint-disable react/prop-types */
//import React from 'react'

//import BarChart from "../../Reusable/BarChart";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../Redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const location = useLocation();
  const personData = location.state;

  const [imageLoaded, setImageLoaded] = useState(true);
  const [position, setPosition] = useState("");

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const updatePosition = async function (e) {
    e.preventDefault()
    if(!position){
      return toast.error("please select a position")
    }
    await dispatch(updateUser({userData:{position},userId:personData._id}));
  };

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
            <p>{new Date(personData?.createdAt).toLocaleString("en-US")}</p>
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
              src={imageLoaded ? personData?.user_photo : "/images/avatar.webp"}
              alt="user photo"
              onError={handleImageError}
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
      {/* <div className="h-2/6">Graph</div> */}
      {/* <div className="h-1/6">Label</div> */}
      {personData?.age >=14 && 
      <div className="mt-5">
        <form
          action=""
          className="flex items-center gap-3 justify-between max-md:flex-col max-sm:items-start"
          onSubmit={updatePosition}
        >
          <select
            name=""
            id=""
            className="w-full"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            <option value="">-- Change User Position --</option>
            <option value="Member">Member</option>
            <option value="Steward">Steward</option>
            <option value="Ministry President">Ministry President</option>
            <option value="Mustard President">Mustard Seed President</option>
            <option value="Workforcers">Workforcers</option>
          </select>
          <button type="submit" className="btn--primary">
            Submit
          </button>
        </form>
      </div>
      }
    </div>
  );
};

export default Profile;
