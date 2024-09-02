import axios from "axios";

const markAttendance = async function (attendanceData) {
  const response = await axios.post(
    "/attendance/mark-attendance",
    attendanceData
  );
  return response.data;
};

const getAttendanceRecords = async function (query) {
  const response = await axios.get(`/attendance/get-attendance-records?${query}`);
  return response.data;
};

const attendanceServices = {
  markAttendance,
  getAttendanceRecords
};

export default attendanceServices;
