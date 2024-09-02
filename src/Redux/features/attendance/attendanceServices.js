import axios from "axios";

const markAttendance = async function (attendanceData) {
  const response = await axios.post(
    "/attendance/mark-attendance",
    attendanceData
  );
  return response.data;
};

const attendanceServices = {
  markAttendance,
};

export default attendanceServices;
