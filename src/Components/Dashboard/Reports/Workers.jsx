import { useEffect, useState } from "react";
import BackBtn from "../../Reusable/BackBtn";
import BarChart from "./BarChart";
import { useDispatch, useSelector } from "react-redux";
import { getAttendanceRecords } from "../../../Redux/features/attendance/attendanceSlice";

function Workers() {
  const dispatch = useDispatch();

  const { attendanceLoading, attendanceRecords } = useSelector(
    (state) => state.attendance
  );

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [meetingType, setMeetingType] = useState("General Meeting");
  const [records, setRecords] = useState(attendanceRecords);

  useEffect(() => {
    const fetchRecords = async () => {
      const queryParams = new URLSearchParams();
      if (meetingType) queryParams.append("meetingType", meetingType);
      if (startDate) queryParams.append("startDate", startDate);
      if (endDate) queryParams.append("endDate", endDate);
      // console.log(queryParams);
      await dispatch(getAttendanceRecords(queryParams));
      setRecords(attendanceRecords);
    };
    fetchRecords();
  }, [endDate, startDate, meetingType]);

  return (
    <div className="h-[80vh]">
      <div>
      <BackBtn
            text="Workers"
            paddingAndMargin="p-3 mb-3"
            path={"/dashboard/attendance"}
          />
      </div>
      <div className="flex items-center justify-between max-sm:my-5">
        <div className="flex items-center justify-between w-1/3">
         
          <p className="text-xl">Workers</p>
        </div>
        <button className="bg-green-600 cursor-pointer text-white p-3 rounded-sm hover:bg-green-500 duration-300">
          Download Report
        </button>
      </div>
      <form
        action=""
        className="bg-slate-50 shadow-md pl-3 flex max-md:flex-col items-center max-md:items-start max-md:gap-5 rounded-md w-fit mt-5 p-5"
      >
        <label className="flex items-center mr-5 w-full" htmlFor="">
          Start
          <input
            className="mb-0 ml-2 w-full"
            type="date"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            value={startDate}
          />
        </label>
        <label className="flex items-center mr-5 w-full" htmlFor="">
          End
          <input
            className="mb-0 ml-2 w-full"
            type="date"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            value={endDate}
          />
        </label>
        <label className="flex items-center mr-5 w-full" htmlFor="">
          Meeting
          {/* <input className="mb-0 ml-2 w-32" type="text" /> */}
          <select
            name=""
            id=""
            onChange={(e) => {
              setMeetingType(e.target.value);
            }}
            value={meetingType}
            className="mb-0 ml-2 py-4 w-full"
          >
            {/* <option value="" disabled >Meeting Type</option> */}
            <option value="General Meeting">General Meeting</option>
            <option value="Mustard Seed Meeting">Mustard Seed Meeting</option>
            <option value="Mustard Meeting">Mustard Meeting</option>
          </select>
        </label>
        <label className="flex items-center mr-5 w-full" htmlFor="">
          WorkersForce
          <input className="mb-0 ml-2 w-full" type="text" />
        </label>
        <button
          onClick={(e) => e.preventDefault}
          className="bg-blue-700 hover:bg-blue-500 duration-300 p-4 rounded-e-md text-white max-sm:w-full max-sm:rounded-md"
          type="submit"
        >
          Generate
        </button>
      </form>
      {/* chart here */}
      <div className="mt-16 px-5 max-sm:-ml-[40px] pb-16">
        <BarChart records={records} />
      </div>
    </div>
  );
}

export default Workers;
