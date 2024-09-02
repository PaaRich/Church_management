import { useEffect, useState } from "react";
import BackBtn from "../../Reusable/BackBtn";
import ProgressCircle from "../../Reusable/ProgressCircle";
import BarChart from "./BarChart";
import PieChartReport from "./PieChartReport";
import { useDispatch, useSelector } from "react-redux";
import { getAttendanceRecords } from "../../../Redux/features/attendance/attendanceSlice";

function Reports() {
  const dispatch = useDispatch();
  const { attendanceLoading, attendanceRecords } = useSelector(
    (state) => state.attendance
  );

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [meetingType, setMeetingType] = useState("General Meeting");
  const [records, setRecords] = useState(attendanceRecords);

  // console.log(meetingType)

  useEffect(() => {
    const fetchRecords = async () => {
      const queryParams = new URLSearchParams();
      if (meetingType) queryParams.append("meetingType", meetingType);
      if (startDate) queryParams.append("startDate", startDate);
      if (endDate) queryParams.append("endDate", endDate);
      console.log(queryParams);
      await dispatch(getAttendanceRecords(queryParams));
      setRecords(attendanceRecords);
    };
    fetchRecords();
  }, [endDate, startDate, meetingType]);

  useEffect(() => {
    setRecords(attendanceRecords);
  }, [attendanceRecords]);
  console.log(records);

  const generateReport = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-[80vh]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-1/3">
          <BackBtn
            text="Report"
            paddingAndMargin="p-3 mb-3"
            path={"/dashboard/attendance"}
          />
          <p className="text-xl">Attendance</p>
        </div>
        <button className="bg-green-600 cursor-pointer text-white p-3 rounded-sm hover:bg-green-500 duration-300">
          Download Report
        </button>
      </div>
      <form
        action=""
        className="bg-slate-50 shadow-md pl-3 flex items-center rounded-md w-fit mt-5 p-4"
      >
        <label className="flex items-center mr-5" htmlFor="">
          Start
          <input
            className="mb-0 ml-2"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            type="date"
          />
        </label>
        <label className="flex items-center mr-5" htmlFor="">
          End
          <input
            className="mb-0 ml-2"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            type="date"
          />
        </label>
        <label className="flex items-center mr-5" htmlFor="meetingtype">
          Meeting
          <select
            name="meetingType"
            id="meetingtype"
            onChange={(e) => {
              setMeetingType(e.target.value);
            }}
            className="mb-0 ml-2 py-4"
          >
            <option value="General Meeting">General Meeting</option>
            <option value="Mustard Seed Meeting">Mustard Seed Meeting</option>
            <option value="Mustard Meeting">Mustard Meeting</option>
          </select>
        </label>
        <button
          onClick={(e) => e.preventDefault}
          className="bg-blue-700 hover:bg-blue-500 duration-300 p-4 rounded-e-md text-white"
          type="submit"
        >
          Generate
        </button>
      </form>
      {/* charts here */}
      <div className="mt-16 px-5">
        <BarChart />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-20">
        <div>
          <PieChartReport />
        </div>
        <div className="grid grid-cols-2">
          <div className="text-center w-[150px] h-[150px] mb-10">
            <ProgressCircle percentage={20} text={`20%`} />
            <h4 className="font-semibold text-md mt-5 text-xl">Female</h4>
          </div>
          <div className="text-center w-[150px] h-[150px]">
            <ProgressCircle percentage={20} text={`20%`} />
            <h4 className="font-semibold text-md mt-5 text-xl">Male</h4>
          </div>
          <div className="text-center w-[150px] h-[150px]">
            <ProgressCircle percentage={20} text={`20%`} />
            <h4 className="font-semibold text-md mt-5 text-xl">Childern</h4>
          </div>
          <div className="text-center w-[150px] h-[150px]">
            <ProgressCircle percentage={20} text={`20%`} />
            <h4 className="font-semibold text-md mt-5 text-xl">Youth</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
