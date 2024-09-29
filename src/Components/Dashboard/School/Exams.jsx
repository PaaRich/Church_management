import BackBtn from "../../Reusable/BackBtn";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Exams = () => {
  const [dropAction, setDropAction] = useState(false);
  return (
    <div>
        <BackBtn
          text="Foundational Studies"
          paddingAndMargin="p-2 mb-0"
          path={"/dashboard/school"}
        />
      <div className="flex items-center justify-between mt-5 max-sm:flex-col-reverse max-sm:gap-3">
        <h1 className="text-xl font-semibold">Exams</h1>
        <div className="relative w-[40%] max-md:w-[60%] max-sm:w-full">
          <div
            className="flex items-center justify-between border-2 p-2 cursor-pointer rounded-sm"
            onClick={() => setDropAction(!dropAction)}
          >
            <p>Active</p>
            {dropAction ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {dropAction && (
            <div className="flex flex-col items-start absolute top-full border-2 z-50 bg-slate-200 w-full rounded-b-sm shadow-xl">
              <Link
                to="/dashboard/school"
                className="hover:bg-slate-500 hover:text-white w-full p-1"
              >
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
                to="/dashboard/school/files"
              >
                Browse Files
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
      <Outlet />
    </div>
  );
};

export default Exams;
