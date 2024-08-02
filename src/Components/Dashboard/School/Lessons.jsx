import BackBtn from "../../Reusable/BackBtn";
import project from "../../../assets/management.webp";
import projectRoll from "../../../assets/project-manager-roll.jpg";
import discipline from "../../../assets/discipline1.jpg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState } from "react";

const Lessons = () => {
  const [dropAction, setDropAction] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <BackBtn
          text="Foundational Studies"
          paddingAndMargin="p-2 mb-0"
          path={"/dashboard/school"}
        />
        <h1 className="text-xl ">Lessons</h1>
        <div className="relative w-[40%]">
          <div
            className="flex items-center justify-between border-2 p-2  cursor-pointer rounded-sm"
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
                to="/dashboard/school/exams"
              >
                Exams
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between mt-3">
        <div>
          <h1 className="text-xl">Project Management</h1>
          <Slider {...settings}>
            <div className="border-2 h-28">
              <img src={project} alt="img" />
            </div>
            <div className="border-2 h-28">
              <img src={project} alt="img" />
            </div>
            <div className="border-2 h-28">
              <img src={project} alt="img" />
            </div>
            <div className="border-2 h-28">
              <img src={project} alt="img" />
            </div>
            <div className="border-2 h-28">
              <img src={project} alt="img" />
            </div>
            <div className="border-2 h-28">
              <img src={project} alt="img" />
            </div>
          </Slider>
        </div>
        <div className="my-5">
          <h1 className="text-xl">System Management</h1>
          <Slider {...settings}>
            <div className="border-2 h-28">
              <img src={projectRoll} alt="img1" />
            </div>
            <div className="border-2 h-28">
              <img src={projectRoll} alt="img1" />
            </div>
            <div className="border-2 h-28">
              <img src={projectRoll} alt="img1" />
            </div>
            <div className="border-2 h-28">
              <img src={projectRoll} alt="img1" />
            </div>
            <div className="border-2 h-28">
              <img src={projectRoll} alt="img1" />
            </div>
            <div className="border-2 h-28">
              <img src={projectRoll} alt="img1" />
            </div>
          </Slider>
        </div>
        <div>
          <h1 className="text-xl">Discipline</h1>
          <Slider {...settings}>
            <div className="border-2 h-28">
              <img src={discipline} alt="img2" />
            </div>
            <div className="border-2 h-28">
              <img src={discipline} alt="img2" />
            </div>
            <div className="border-2 h-28">
              <img src={discipline} alt="img2" />
            </div>
            <div className="border-2 h-28">
              <img src={discipline} alt="img2" />
            </div>
            <div className="border-2 h-28">
              <img src={discipline} alt="img2" />
            </div>
            <div className="border-2 h-28">
              <img src={discipline} alt="img2" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
