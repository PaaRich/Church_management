import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComplaint } from "../../../Redux/features/complaint/complaintSlice";
import { useEffect, useState } from "react";
import Loader from "../../Reusable/Loader";

const ComplainDetail = () => {
  const location = useLocation();
  const complainData = location.state;
  const dispatch = useDispatch();
  const { comp_id } = useParams();
  const { complaintLoading, complaintSuccess, specificComplaint } = useSelector(
    (state) => state.complaint
  );

  const [complaint, setComplaint] = useState(specificComplaint);
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

  // console.log(complaint)

  return (
    <>
    {complaintLoading && <Loader/>}
    <div>
      <h1 className="font-semibold text-2xl">Complaint</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quae
        nam hic facilis incidunt? Nemo perferendis iste vitae itaque autem
        harum? Molestias repellendus ipsa laudantium aut a nam voluptates
        possimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Magnam quae nam hic facilis incidunt? Nemo perferendis iste vitae itaque
        autem harum? Molestias repellendus ipsa laudantium aut a nam voluptates
        possimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Magnam quae nam hic facilis incidunt? Nemo perferendis iste vitae itaque
        autem harum? Molestias repellendus ipsa laudantium aut a nam voluptates
        possimus.
      </p> */}
      <div className="border-2 border-blue-500 my-5 p-5 rounded-md">
        <div className="grid grid-cols-2 w-full items-center">
        <div className="text-lg font-semibold mr-10">
            Complainant Name:{"  "}
            <span className="underline font-light">
              {complaint?.userId?.firstname} &nbsp;
              {complaint?.userId?.lastname}
            </span>
          </div>
          <div className="text-lg font-semibold">
            Complaint type:{"  "}
            <span className="underline font-light">
              {complaint?.complaint_type}
            </span>
          </div>
          <div className="text-lg font-semibold mr-10">
            Active Phone Number:{"  "}
            <span className="underline font-light">
              {complaint?.active_number}
            </span>
          </div>
        <div className="flex items-center mt-3">
          <div className="text-lg font-semibold">
            Date created:{"  "}
            <span className="underline font-light">
              {" "}
              {new Date(complaint?.createdAt).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
          <div></div>
        </div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-xl mt-10 mb-3">Complaint Description</h4>
        <p className="text-lg leading-7 pb-2 w-[90%]">{complaint?.complaint}</p>
        <div className="mt-5">
          <h4 className="font-semibold text-xl mb-4">Assign Complaint</h4>
          <form action="">
          <select name="coach" id="" className="bg-slate-200 w-[40%]">
            <option value="">Select Coach</option>
            <option value="Coach 1">Coach 1</option>
            <option value="Coach 2">Coach 2</option>
            <option value="Coach 3">Coach 3</option>
          </select>
          <button className="bg-blue-500 text-white px-5 py-3 rounded-sm ml-8 shadow-lg" type="submit">Assign</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ComplainDetail;
