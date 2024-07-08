import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import BackBtn from "../../Reusable/BackBtn";

function School() {
  // action
  const [action, setAction] = useState("Action");
  const [actionOpen, setActionOpen] = useState(false);
  //media
  const [media, setMedia] = useState("Select Platform");
  const [mediaOpen, setMediaOpen] = useState(false);
  //group
  const [group, setGroup] = useState("Enter Group");
  const [groupOpen, setGroupOpen] = useState(false);
  return (
    <div className="w-5/6">
      <div className="flex items-center justify-between">
        <BackBtn text="Foundational School" paddingAndMargin="mb-3 p-3" />
        <div className="relative w-52">
          <div
            className="flex items-center justify-between border-2 px-3 py-2 rounded-lg cursor-pointer bg-slate-100"
            onClick={() => setActionOpen(!actionOpen)}
          >
            {action}{" "}
            {actionOpen ? (
              <IoIosArrowUp size={23} />
            ) : (
              <IoIosArrowDown size={23} />
            )}{" "}
          </div>
          {actionOpen && (
            <div className="absolute top-12 w-full bg-slate-100 z-50">
              <div
                onClick={(e) => setAction(e.target.innerText)}
                className="p-2 border-b-black border-b-2 hover:bg-blue-400 hover:text-white cursor-pointer duration-200 "
              >
                Schedule Meeting
              </div>
              <div
                onClick={(e) => setAction(e.target.innerText)}
                className="p-2 border-b-black border-b-2 hover:bg-blue-400 hover:text-white cursor-pointer duration-200"
              >
                Take a Lesson
              </div>
              <div
                onClick={(e) => setAction(e.target.innerText)}
                className="p-2 hover:bg-blue-400 hover:text-white cursor-pointer duration-200"
              >
                Exams
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-start justify-between mt-20">
        {/* dkdk */}
        <div className="w-2/5 relative">
          <div
            className="flex items-center justify-between bg-slate-200  py-3 px-5 cursor-pointer"
            onClick={() => setMediaOpen(!mediaOpen)}
          >
            {media} {mediaOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {mediaOpen && (
            <div className="bg-slate-200 mt-2 w-full absolute top-12 z-50">
              <div
                onClick={(e) => setMedia(e.target.innerText)}
                className="p-3 border-b-black border-b-2 cursor-pointer hover:bg-blue-500 hover:text-white duration-200"
              >
                Zoom
              </div>
              <div
                onClick={(e) => setMedia(e.target.innerText)}
                className="p-3 border-b-black border-b-2 cursor-pointer hover:bg-blue-500 hover:text-white duration-200"
              >
                Google Meet
              </div>
              <div
                onClick={(e) => setMedia(e.target.innerText)}
                className="p-3 border-b-black border-b-2 cursor-pointer hover:bg-blue-500 hover:text-white duration-200"
              >
                Telegram
              </div>
              <div
                onClick={(e) => setMedia(e.target.innerText)}
                className="p-3 cursor-pointer hover:bg-blue-500 hover:text-white duration-200"
              >
                WhatsApp
              </div>
            </div>
          )}
        </div>
        {/* dd */}
        <div className="w-2/5 relative">
          <div
            className="flex items-center justify-between bg-slate-200  py-3 px-5 cursor-pointer"
            onClick={() => setGroupOpen(!groupOpen)}
          >
            {group} {groupOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {groupOpen && (
            <div className="bg-slate-200 mt-2 absolute top-12 w-full z-50">
              <div
                onClick={(e) => setGroup(e.target.innerText)}
                className="p-3 border-b-black border-b-2 cursor-pointer hover:bg-blue-500 hover:text-white duration-200"
              >
                Mustard Seed President
              </div>
              <div
                onClick={(e) => setGroup(e.target.innerText)}
                className="p-3 border-b-black border-b-2 cursor-pointer hover:bg-blue-500 hover:text-white duration-200"
              >
                Workers
              </div>
              <div
                onClick={(e) => setGroup(e.target.innerText)}
                className="p-3 border-b-black border-b-2 cursor-pointer hover:bg-blue-500 hover:text-white duration-200"
              >
                Ministry Presidents
              </div>
              <div
                onClick={(e) => setGroup(e.target.innerText)}
                className="p-3 cursor-pointer hover:bg-blue-500 hover:text-white duration-200"
              >
                District Pastor
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        <button className="bg-slate-950 text-white mt-10 py-3 w-2/6">
          Scheduling Meeting
        </button>
      </div>
    </div>
  );
}

export default School;
