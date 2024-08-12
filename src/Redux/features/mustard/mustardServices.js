import axios from "axios";

//add user
const addMustard = async function (data) {
  const response = await axios({
    method: "POST",
    url: "/mustard/add-mustard",
    data: data,
  });
  return response.data;
};

//get all mustards
const getMustards = async function () {
    const response = await axios({
      method: "GET",
      url: "/mustard/all-mustards",
    });
    return response.data;
  };

  //delete mustard
const deleteMustard = async function (id) {
  const response = await axios.delete(`/mustard/mustard/${id}`);
  return response.data;
};

const mustardServices={
    addMustard,
    getMustards,
    deleteMustard
}

export default mustardServices