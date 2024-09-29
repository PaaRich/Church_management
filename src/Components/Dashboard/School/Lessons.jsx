import BackBtn from "../../Reusable/BackBtn";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroupedLessons } from "../../../Redux/features/lessons/lessonsSlice";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

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

  return (
    <div>
        <BackBtn
          text="Foundational Studies"
          paddingAndMargin="p-2 mb-0"
          path={"/dashboard/school"}
        />
      <div className="flex max-sm:flex-col-reverse max-sm:gap-5 items-center justify-between max-md:mt-10">
        <h1 className="text-xl font-semibold">Lessons</h1>
        <div className="relative w-[40%] max-md:w-[60%] max-sm:w-full">
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
      <div className="flex flex-col justify-between mt-3">
        <div>
          {lessons?.map((lesson, index) => (
            <div key={index + 1}>
              <h2 className="text-2xl font-semibold my-5 text-slate-800">{lesson?.category}</h2>
              <Splide
                options={{
                  perPage: 3,
                  rewind: true,
                  gap: "1rem",
                  breakpoints: {
                    768: {
                      perPage: 2,
                    },
                    510: {
                      perPage: 1,
                      loop:true
                    },
                  }
                }}
              >
                {lesson?.courses?.map((course, ind) => (
                  <SplideSlide key={ind}>
                    <div className="pb-10">
                      <h4 className="font-semibold text-md capitalize py-3 text-center text-slate-800">
                        {course?.course_title}
                      </h4>
                      <iframe
                        className="w-full"
                        height="315"
                        src={`https://www.youtube.com/embed/${course?.course_link.split('/')[3]}`}
                        title={course?.course_title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lessons;
