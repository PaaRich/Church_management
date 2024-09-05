import axios from "axios";

//add user
const addUser = async function (userData) {
  const response = await axios({
    method: "POST",
    url: "/users/add-member",
    data: userData,
  });
  return response.data;
};

//login User
const loginUser = async function (userData) {
  const response = await axios({
    method: "POST",
    url: "/users/login",
    data: userData,
  });
  return response.data;
};

//get login status
const getLoginStatus = async function () {
  const response = await axios({
    method: "GET",
    url: "/users/loginStatus",
  });
  return response.data;
};

//logout User
const logoutUser = async function () {
  const response = await axios({
    method: "POST",
    url: "/users/logout",
  });
  return response.data;
};

//get all users
const getAllUsers = async function () {
  const response = await axios({
    method: "GET",
    url: "/users/all-users",
  });
  return response.data;
};

//get all coaches
const getAllCoaches = async function () {
  const response = await axios({
    method: "GET",
    url: "/users/get-coaches",
  });
  return response.data;
};

//verify user
const verifyUser = async function () {};

//update user
const updateUser = async function (userData, userId) {
  const response = await axios({
    method: "PATCH",
    url: `/users/update-user/${userId}`,
    data: userData,
  });
  return response.data;
};

//register coach
const registerCoach = async function (coachData) {
  const response = await axios({
    method: "POST",
    url: "/users/register-coach",
    data: coachData,
  });
  return response.data;
};

//get user information
const getUser = async function (userId) {
  const response = await axios({
    method: "GET",
    url: `/users/get-user/${userId}`,
  });
  return response.data;
};

//find user
const findUser = async function (data) {
  const response = await axios({
    method: "POST",
    url: "/users/find-user/",
    data,
  });
  return response.data;
};

//get mustards
const getMustards = async function (mustard) {
  const response = await axios({
    method: "GET",
    url: `/users/get-mustards/${mustard}`,
  });
  return response.data;
};

//get ministries
const getMinistries = async function (ministry) {
  const response = await axios({
    method: "GET",
    url: `/users/get-ministries/${ministry}`,
  });
  return response.data;
};

//get users stats
const getUserStats = async function () {
  const response = await axios({
    method: "GET",
    url: "/users/get-user-stats",
  });
  return response.data;
};
//get users stats
const getMinistryStats = async function () {
  const response = await axios({
    method: "GET",
    url: "/users/get-ministry-stats",
  });
  return response.data;
};
//get users stats
const getMustardStats = async function () {
  const response = await axios({
    method: "GET",
    url: "/users/get-mustard-stats",
  });
  return response.data;
};

//request password reset
const requestPasswordRequest = async function (data) {
  const response = await axios({
    method: "POST",
    url: "/users/request-password-reset",
    data
  });
  return response.data;
};

//schedule meeting
const scheduleMeeting = async function (meetingData) {
  const response = await axios({
    method: "POST",
    url: "/users/schedule-meeting",
    data:meetingData
  });
  return response.data;
};

//get current user
const getMe = async function () {
  const response = await axios({
    method: "GET",
    url: "/users/getMe",
  });
  return response.data;
};

//change password
const changePassword = async function (passwordData) {
  const response = await axios({
    method: "POST",
    url: "/users/change-password",
    data:passwordData
  });
  return response.data;
};

const authServices = {
  addUser,
  loginUser,
  getLoginStatus,
  logoutUser,
  getAllUsers,
  verifyUser,
  getUser,
  getMustards,
  getMinistries,
  findUser,
  updateUser,
  registerCoach,
  getAllCoaches,
  getUserStats,
  getMinistryStats,
  getMustardStats,
  requestPasswordRequest,
  scheduleMeeting,
  getMe,
  changePassword
};

export default authServices;
