import { useEffect, useState } from "react";
import BackBtn from "../../Reusable/BackBtn";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  markAttendance,
  RESET_ATTENDANCE_STATES,
} from "../../../Redux/features/attendance/attendanceSlice";
import Loader from "../../Reusable/Loader";

function Attendance() {
  const dispatch = useDispatch();
  const { attendanceLoading, attendanceSuccess } = useSelector(
    (state) => state.attendance
  );

  const [churchID, setChurchID] = useState("");
  const [meetingType, setMeetingType] = useState("");

  const signAttendance = async (e) => {
    e.preventDefault();
    if (!churchID || !meetingType) {
      return toast.error("all fields are required");
    }
    if (!churchID.toLocaleUpperCase().match(/^CSYI.*\d{2}$/)) {
      return toast.error("invalid churchID");
    }
    if (churchID.length > 10) {
      return toast.error("invalid churchID");
    }
    await dispatch(
      markAttendance({ churchID: churchID.toUpperCase(), meetingType })
    );
  };

  useEffect(() => {
    if (attendanceSuccess) {
      setChurchID("");
      setMeetingType("");
    }
    dispatch(RESET_ATTENDANCE_STATES());
  }, [attendanceSuccess]);

  return (
    <>
      {attendanceLoading && <Loader />}
      <div className="mt-5">
        <BackBtn
          text="Attendance"
          paddingAndMargin="mb-3 p-2"
          path={"/dashboard/forms"}
        />
        <form action="" className="relative max-md:mt-10" onSubmit={signAttendance}>
          <div className="flex items-center gap-10 max-md:flex-col max-md:gap-5">
            <div className="relative w-full">
              <select
                className="py-4 px-5 w-full bg-slate-200 cursor-pointer"
                name="Select Meeting"
                id=""
                onChange={(e) => {
                  setMeetingType(e.target.value);
                }}
                value={meetingType}
              >
                <option value="" disabled>
                  Select Meeting
                </option>
                <option value="General Meeting">General Meeting</option>
                <option value="Mustard Seed Meeting">
                  Mustard seed Meeting
                </option>
                <option value="Ministry Meeting">Ministry Meeting</option>
              </select>
            </div>
            <input
              className="w-full py-4 px-3 text-lg bg-slate-200"
              type="text"
              name=""
              id=""
              placeholder="Enter ID"
              maxLength={10}
              onChange={(e) => {
                setChurchID(e.target.value);
              }}
              value={churchID}
            />
          </div>
          <div className="w-full relative mt-20 max-md:mt-10">
            <button
              type="submit"
              className="border-0 w-80 text-white py-4 text-lg absolute left-1/2 -translate-x-1/2 bg-slate-900 hover:bg-slate-800 duration-200 rounded"
              onClick={(e) => e.preventDefault}
            >
              Check-in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Attendance;
