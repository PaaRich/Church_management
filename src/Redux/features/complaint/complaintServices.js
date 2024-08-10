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

const complaintServices= {
    addComplaint
}

export default complaintServices