import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLesson,
  RESET_LESSONS,
  updateLesson,
} from "../../../Redux/features/lessons/lessonsSlice";
import { useParams } from "react-router-dom";
import Loader from "../../Reusable/Loader";

function EditLesson() {
  const { lesson_id } = useParams();

  const dispatch = useDispatch();
  const { lesson_loading, lesson, lesson_success } = useSelector(
    (state) => state.lesson
  );

  const initialData = {
    course_title: "",
    course_description: "",
    course_link: "",
    course_category: "",
  };
  const [lessonData, setLessonData] = useState(initialData);
  // const [lessonDetails, setLessonDetails] = useState();

  const handleInputChange = (e) => {
    setLessonData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getLessonDetails = async () => {
    await dispatch(getLesson(lesson_id));
  };
  useEffect(() => {
    getLessonDetails();
    // setLessonDetails((prev)=>{...prev,});
    setLessonData((prev) => ({
      ...prev,
      course_title: lesson?.course_title,
      course_description: lesson?.course_description,
      course_link: lesson?.course_link,
      course_category: lesson?.course_category,
    }));
  }, []);
  useEffect(() => {
    setLessonData((prev) => ({
      ...prev,
      course_title: lesson?.course_title,
      course_description: lesson?.course_description,
      course_link: lesson?.course_link,
      course_category: lesson?.course_category,
    }));
  }, [lesson]);



  // useEffect(() => {
  //   if (lesson_success) {
  //     setLessonData(initialData);
  //   }
  //   // dispatch(RESET_LESSONS());
  // }, [lesson_success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !lessonData.course_title ||
      !lessonData.course_link ||
      !lessonData.course_category ||
      !lessonData.course_description
    ) {
      return toast.error("please fill out all fields");
    }
    await dispatch(updateLesson({ lesson_id, lessonData }));
  };

  return (
    <>
      {lesson_loading && <Loader />}
      <div className="mt-5">
        <h3 className="text-2xl capitalize font-semibold text-slate-800">
          Edit Course
        </h3>
        <form
          action=""
          onSubmit={handleSubmit}
          className="lesson--forms mt-10 md:mx-10"
        >
          <div className="grid grid-cols-2 gap-8 w-full items-center justify-between max-md:grid-cols-1 max-md:gap-2">
            <div>
              <label htmlFor="course_title" className="font-semibold text-lg">
                Course Title
              </label>
              <input
                type="text"
                className="my-3"
                name="course_title"
                id="course_title"
                onChange={handleInputChange}
                value={lessonData.course_title}
              />
            </div>
            <div>
              <label
                htmlFor="course_category"
                className="font-semibold text-lg"
              >
                Course Category
              </label>
              <select
                name="course_category"
                className="my-3"
                id="course_category"
                onChange={handleInputChange}
                value={lessonData.course_category}
              >
                <option value="">-- Select a Category --</option>
                <option value="Programming">Programming</option>
                <option value="Project Management">Project Management</option>
                <option value="System Management">System Management</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="course_link" className="font-semibold text-lg">
              Lesson Video URL
            </label>
            <input
              type="url"
              className="my-3"
              name="course_link"
              id="course_link"
              onChange={handleInputChange}
              value={lessonData.course_link}
            />
          </div>
          <label htmlFor="lesson_description" className="font-semibold text-lg">
            Description of Lesson
          </label>
          <textarea
            name="course_description"
            id="lesson_description"
            cols="30"
            rows="7"
            className="my-3 resize-none"
            onChange={handleInputChange}
            value={lessonData.course_description}
          ></textarea>

          <button className="btn--primary max-sm:w-full" type="submit">
            Update Lesson
          </button>
        </form>
      </div>
    </>
  );
}

export default EditLesson;
