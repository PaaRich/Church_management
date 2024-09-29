import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  assignComplaint,
  getComplaint,
} from "../../../Redux/features/complaint/complaintSlice";
import React, { useEffect, useState } from "react";
import Loader from "../../Reusable/Loader";
import { getAllCoaches } from "../../../Redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Select from "react-select";

const ComplainDetail = () => {
  const handleChange = (selectedOption) => {
    setSelectedCoach(selectedOption.value);
    // console.log(`Selected: ${selectedOption.value}`);
  };

  const location = useLocation();
  const complainData = location.state;
  const dispatch = useDispatch();
  const { comp_id } = useParams();
  const { complaintLoading, complaintSuccess, specificComplaint } = useSelector(
    (state) => state.complaint
  );
  const { allUsers, isLoading } = useSelector((state) => state.auth);

  const [coaches, setCoaches] = useState(allUsers);
  const [complaint, setComplaint] = useState(specificComplaint);
  const [selectedCoach, setSelectedCoach] = useState("");

  const getCoaches = async () => {
    await dispatch(getAllCoaches());
  };
  useEffect(() => {
    getCoaches();
    setCoaches(allUsers);
  }, []);
  useEffect(() => {
    setCoaches(allUsers);
  }, [allUsers]);

  const getComplaintDetail = async () => {
    await dispatch(getComplaint(comp_id));
  };
  useEffect(() => {
    getComplaintDetail();
    setComplaint(specificComplaint);
  }, []);

  useEffect(() => {
    setComplaint(specificComplaint);
  }, [specificComplaint]);

  const assignToCoach = async (e) => {
    e.preventDefault();
    if (!selectedCoach) {
      return toast.error("please select a coach");
    }
    await dispatch(assignComplaint({ comp_id, assigned_to: selectedCoach }));
  };

  let coachesArray = [];
  for (const coach of coaches) {
    const newObj = {
      value: coach?.userId?._id,
      label: `${coach?.userId?.firstname}  ${coach?.userId?.lastname} (${coach.coach_speciality})`,
    };
    coachesArray.push(newObj);
  }

  return (
    <>
      {complaintLoading && <Loader />}
      {isLoading && <Loader />}
      <div>
        <h1 className="font-semibold text-2xl">Complaint</h1>
        <div className="border-2 border-blue-500 my-5 p-5 rounded-md">
          <div className="grid grid-cols-2 w-full items-center max-sm:grid-cols-1">
            <div className="text-lg font-semibold mr-10">
              Complainant Name:{"  "}
              <span className="underline font-light">
                {complaint?.singleComplaint?.userId?.firstname} &nbsp;
                {complaint?.singleComplaint?.userId?.lastname}
              </span>
            </div>
            <div className="text-lg font-semibold">
              Complaint type:{"  "}
              <span className="underline font-light">
                {complaint?.singleComplaint?.complaint_type}
              </span>
            </div>
            <div className="text-lg font-semibold mr-10">
              Active Phone Number:{"  "}
              <span className="underline font-light">
                0{complaint?.singleComplaint?.active_number}
              </span>
            </div>
            <div className="flex items-center mt-3">
              <div className="text-lg font-semibold">
                Date created:{"  "}
                <span className="underline font-light">
                  {" "}
                  {new Date(
                    complaint?.singleComplaint?.createdAt
                  ).toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div></div>
            </div>
            {complaint?.singleComplaint?.isAssigned && (
              <div className="text-lg font-semibold mr-10">
                Assigned To:{"  "}
                {complaint?.others?.firstname} &nbsp;
                {complaint?.others?.lastname}
                <span className="underline font-light">
                  {/* {complaint?.assigned_to?.firstname} */}
                </span>
              </div>
            )}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-xl mt-10 mb-3">
            Complaint Description
          </h4>
          <p className="text-lg leading-7 pb-2 w-[90%]">
            {complaint?.singleComplaint?.complaint}
          </p>
          <div className="mt-5">
            <h4 className="font-semibold text-xl mb-4">Assign Complaint</h4>
            <form action="" onSubmit={assignToCoach}>
              <Select
                options={coachesArray}
                onChange={handleChange}
                isSearchable
                placeholder="Select a Coach..."
                className="w-3/6 max-md:w-full mb-5"
              />
              <button
                className="bg-blue-500 text-white px-5 py-3 rounded-sm w-3/12 shadow-lg max-sm:w-full"
                type="submit"
              >
                Assign
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplainDetail;
