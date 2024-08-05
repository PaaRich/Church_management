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
const getAllUsers = async function () {};

//verify user
const verifyUser = async function () {};

//get user information
const getUser = async function () {};

//get mustards
const getMustards = async function () {};

//get ministries
const getMinistries = async function () {};

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
