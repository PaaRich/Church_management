import axios from "axios";

//add user
const addComplaint = async function (complaintData) {
  const response = await axios({
    method: "POST",
    url: "/complaints/add-complaint",
    data: complaintData,
  });
  return response.data;
};

const getAllComplaints = async function () {
  const response = await axios({
    method: "GET",
    url: "/complaints/get-complaints",
  });
  return response.data;
};

const getComplaintDetails = async function (id) {
  const response = await axios.get(`/complaints/complaint/${id}`);
  return response.data;
};

const complaintServices = {
  addComplaint,
  getAllComplaints,
  getComplaintDetails
};

export default complaintServices;
