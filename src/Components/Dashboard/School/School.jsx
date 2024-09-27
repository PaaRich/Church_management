import BackBtn from "../../Reusable/BackBtn";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RESET, scheduleMeeting } from "../../../Redux/features/auth/authSlice";

function School() {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.auth);

  const initialStates = {
    platform: "",
    target_group: "",
    message: "",
  };
  const [dropAction, setDropAction] = useState(false);
  const [meetingData, setMeetingData] = useState(initialStates);

  const handleInputChange = (e) => {
    setMeetingData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (
      !meetingData.platform ||
      !meetingData.target_group ||
      !meetingData.message
    ) {
      return toast.error("all fields are required");
    }
    await dispatch(scheduleMeeting(meetingData));
    // console.log(meetingData)
  };

  useEffect(() => {
    if (isSuccess) {
      setMeetingData(initialStates);
    }
    dispatch(RESET());
  }, [isSuccess]);

  return (
    <div className="w-full px-10 mt-5 max-md:px-5 max-sm:px-1">
        <BackBtn
          text="Foundational School"
          paddingAndMargin="mb-3 p-2"
          path={"/dashboard/coaching"}
        />
      <div className="flex items-center justify-between max-sm:mt-5">
        <div className="relative w-[40%] max-md:w-[60%] max-sm:w-full">
          <div
            className="flex items-center justify-between border-2 p-2 cursor-pointer rounded-sm"
            onClick={() => setDropAction(!dropAction)}
          >
            <p>Schedule Meeting</p>
            {dropAction ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {dropAction && (
            <div className="flex flex-col items-start absolute top-full border-2 z-50 bg-slate-200 w-full rounded-b-sm shadow-xl">
              <Link className="hover:bg-slate-500 hover:text-white w-full p-1">
                Schedule Meeting
              </Link>
              <Link
                className="hover:bg-slate-500 hover:text-white w-full p-1"
                to="/dashboard/school/lessons"
              >
                Take a Lesson
              </Link>
              <Link
                className="hover:bg-slate-500 hover:text-white w-full p-1"
                to="/dashboard/school/exams"
              >
                Exams
              </Link>
            </div>
          )}
        </div>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex max-sm:flex-col items-start justify-between gap-10 max-sm:gap-2 mt-10">
            <div className="w-full relative">
              <select
                className="py-3 px-5 w-full bg-slate-200 cursor-pointer"
                name="platform"
                onChange={handleInputChange}
                value={meetingData.platform}
                id=""
              >
                <option value="" disabled>
                  Select Platform
                </option>
                <option value="Zoom">Zoom</option>
                <option value="Google Meet">Google Meet</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
            <div className="w-full relative">
              <select
                className="py-3 px-5 w-full bg-slate-200 cursor-pointer"
                name="target_group"
                onChange={handleInputChange}
                value={meetingData.target_group}
                id=""
              >
                <option value="" disabled>
                  Target Group
                </option>
                <option value="Mustard Seed President">
                  Mustard Seed Presidents
                </option>
                <option value="Workforce">WorkForces</option>
                <option value="Ministry President">Ministry Presidents</option>
                <option value="District Pastor">District Pastors</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              className="border-2 border-slate-200/80 w-full p-5 resize-none mt-5 rounded-sm"
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Information about Meeting"
              onChange={handleInputChange}
              value={meetingData.message}
            ></textarea>
          </div>
          <div className="w-full relative">
            <button className="bg-slate-950 hover:bg-slate-800 duration-200 text-white mt-10 py-4 w-3/6 absolute left-1/2 -translate-x-1/2 rounded max-sm:w-full">
              Scheduling Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default School;
