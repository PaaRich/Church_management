import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addComplaint, RESET_COMPLAINTS } from "../../../Redux/features/complaint/complaintSlice";
import Loader from "../../Reusable/Loader";

const LogComplain = () => {
  const dispatch = useDispatch();
  const { complaintLoading, complaintSuccess } = useSelector(
    (state) => state.complaint
  );

  const initials={
    active_number: "",
    complaint_type: "",
    complaint: "",
  }
  const [complaintData, setComplaintData] = useState(initials);

  const handleChange = (e) => {
    setComplaintData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));  };

  const submitData = async (e) => {
    e.preventDefault();
    if (
      !complaintData.active_number ||
      !complaintData.complaint_type ||
      !complaintData.complaint
    ) {
      return toast.error("Please all fields are required");
    }
    await dispatch(addComplaint(complaintData));
    // console.log(complaintData);

  };

  useEffect(()=>{
    if(complaintSuccess){
      setComplaintData(initials)
    }
    dispatch(RESET_COMPLAINTS())
  },[complaintSuccess])

  return (
    <>
    {complaintLoading && <Loader/>}
    <div className="mt-5 max-sm:mt-10">
      <p className="font-semibold text-2xl max-sm:text-xl">Log Complain</p>
      <form className=" mt-5" onSubmit={submitData}>
        <div className="sm:grid grid-cols-2 gap-5 items-end ">
          <div >
            <input
              className="w-full"
              type="phone"
              placeholder="Active Phone Number"
              name="active_number"
              value={complaintData.active_number}
              onChange={handleChange}
              maxLength={10}
            />
          </div>
          <div className="w-full">
            <select
              className="w-full"
              name="complaint_type"
              id=""
              value={complaintData.complaint_type}
              onChange={handleChange}
            >
              <option value="">Complaint Type</option>
              <option value="Specific">Specific Complaint</option>
              <option value="General">General Complaint</option>
            </select>
          </div>
          <div className="col-span-2">
            <textarea
              className="p-5 border-2 border-slate-200/80 w-full  resize-none"
              name="complaint"
              id=""
              cols="30"
              rows="7"
              placeholder="Enter Complaint"
              value={complaintData.complaint}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button
          className="bg-blue-500 py-3 px-6 w-1/5 max-sm:w-full mt-4 text-white rounded-sm hover:bg-blue-400 duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default LogComplain;
