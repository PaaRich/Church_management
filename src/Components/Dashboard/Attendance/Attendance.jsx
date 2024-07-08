import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Attendance() {
  const navigate = useNavigate();
  const [meeting, setMeeting] = useState("Select meeting");
  const [openMeeting, setOpenMeeting] = useState(false);
  return (
    <div className="h-[80vh]">
      <div className="my-3">
        <div
          className="flex items-center text-lg cursor-pointer w-fit p-3 hover:text-white hover:bg-blue-900"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack size={23} />
          Attendance
        </div>
      </div>
      <form action="" className="relative">
        <div className="flex items-center justify-around">
          <div className="relative">
            <div
              onClick={() => setOpenMeeting(!openMeeting)}
              className="cursor-pointer flex items-center justify-between bg-slate-200 w-80 py-4 rounded-sm px-3 text-lg"
            >
              {meeting} {openMeeting ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div
              className={`${
                !openMeeting && "hidden"
              } c-meetings absolute top-16 z-50`}
            >
              <div
                className=" bg-slate-200 w-60 py-3 rounded-sm px-2 text-lg cursor-pointer border-b-2 border-b-black"
                onClick={(e) => setMeeting(e.target.innerText)}
              >
                General Meeting
              </div>
              <div
                className="bg-slate-200 w-60 py-3 rounded-sm px-2 text-lg cursor-pointer border-b-2 border-b-black"
                onClick={(e) => setMeeting(e.target.innerText)}
              >
                Mustard-seed Meeting
              </div>
              <div
                className=" bg-slate-200 w-60 py-3 rounded-sm px-2 text-lg cursor-pointer"
                onClick={(e) => setMeeting(e.target.innerText)}
              >
                Ministry Meeting
              </div>
            </div>
          </div>
          <input
            className="w-80 py-4 px-3 text-lg bg-slate-200"
            type="text"
            name=""
            id=""
            placeholder="Enter ID"
          />
        </div>
        <div className="c-check-in-btn mt-20">
          <button
            type="submit"
            className="border-0 w-80 text-white py-4 text-lg"
            onClick={(e) => e.preventDefault}
          >
            Check-in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Attendance;
