import axios from "axios";

//add ministry
const addMinistry = async function (data) {
  const response = await axios({
    method: "POST",
    url: "/ministry/add-ministry",
    data: data,
  });
  return response.data;
};

//get ministries
const getMinistries = async function () {
  const response = await axios({
    method: "GET",
    url: "/ministry/all-ministries",
  });
  return response.data;
};

//delete ministries
const deleteMinistry = async function (id) {
  const response = await axios.delete(`/ministry/ministry/${id}`);
  return response.data;
};

const ministryServices={
    addMinistry,
    getMinistries,
    deleteMinistry
}

export default ministryServices