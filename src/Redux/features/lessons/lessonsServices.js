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

const lessonsServices = {
  addLesson,
  getAllLessons
};
export default lessonsServices;
