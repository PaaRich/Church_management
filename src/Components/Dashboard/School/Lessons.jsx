import BackBtn from "../../Reusable/BackBtn";
import project from "../../../assets/management.webp";
import projectRoll from "../../../assets/project-manager-roll.jpg";
import discipline from "../../../assets/discipline1.jpg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroupedLessons } from "../../../Redux/features/lessons/lessonsSlice";

const Lessons = () => {
  const dispatch = useDispatch();
  const { allLessons } = useSelector((state) => state.lesson);

  const [dropAction, setDropAction] = useState(false);
  const [lessons, setLessons] = useState(allLessons);

  const getLessons = async () => {
    await dispatch(getGroupedLessons());
  };

  useEffect(() => {
    getLessons();
    setLessons(allLessons);
  }, []);

  useEffect(() => {
    setLessons(allLessons);
  }, [allLessons]);

  console.log(lessons);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots:true
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
          {/* <h1 className="text-xl">Project Management</h1> */}
          {/* <div className="border-2 h-28">
              <img src={project} alt="img" />
              </div> */}
          {lessons?.map((lesson, index) => (
            <div key={index + 1}>
              <h2 className="text-xl font-semibold my-5">{lesson?.category}</h2>
              <Slider {...settings}>
                {lesson?.courses?.map((course, ind) => (
                  <div key={ind}>
                    <h4 className="font-semibold text-md capitalize py-3">{course?.course_title}</h4>
                    <iframe
                      className="w-full"
                      height="315"
                      src="https://www.youtube.com/embed/D1QMwx41QAc?si=je0FcxFMA4lmRf9n"
                      title={course?.course_title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                    {/* <h3>{course?.course_title}</h3> */}
                  </div>
                ))}
                {/* {console.log(lesson?.category)} */}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lessons;
