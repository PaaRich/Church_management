import axios from "axios";

//add new lesson
const addLesson = async function (lessonData) {
  const response = await axios({
    method: "POST",
    url: "/lesson/add-lesson",
    data: lessonData,
  });
  return response.data;
};

//get all lesson
const getAllLessons = async function () {
  const response = await axios({
    method: "GET",
    url: "/lesson/all-lessons",
  });
  return response.data;
};

//get grouped lessons
const getGroupedLessons = async function () {
  const response = await axios({
    method: "GET",
    url: "/lesson/grouped-lessons",
  });
  return response.data;
};

//get lesson
const getLesson = async function (lesson_id) {
  const response = await axios({
    method: "GET",
    url: `/lesson/get-lesson/${lesson_id}`,
  });
  return response.data;
};

//delete lesson
const deleteLesson = async function (lesson_id) {
  const response = await axios({
    method: "DELETE",
    url: `/lesson/delete-lesson/${lesson_id}`,
  });
  return response.data;
};

//lesson lesson
const updateLesson = async function (lesson_id, lessonData) {
  const response = await axios({
    method: "PATCH",
    url: `/lesson/update-lesson/${lesson_id}`,
    data: lessonData,
  });
  return response.data;
};

const lessonsServices = {
  addLesson,
  getAllLessons,
  getGroupedLessons,
  updateLesson,
  getLesson,
  deleteLesson
};
export default lessonsServices;
