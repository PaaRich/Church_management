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
const getLoginStatus = async function () {};

//logout User
const logoutUser = async function () {};

//get all users
const getAllUsers = async function () {
  const response = await axios({
    method: "GET",
    url: "/users/all-users",
  });
  return response.data;
};

//verify user
const verifyUser = async function () {};

//get user information
const getUser = async function () {};

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
};

export default authServices;
