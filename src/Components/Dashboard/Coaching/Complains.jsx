//import { complainsObj } from "./complainsObj";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllComplaints } from "../../../Redux/features/complaint/complaintSlice";
import Loader from "../../Reusable/Loader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Complains = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { complaintLoading, complaintSuccess, allComplaints } = useSelector(
    (state) => state.complaint
  );

  const [status, setStatus] = useState(false);
  const [complaints, setComplaints] = useState(allComplaints);
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const getComplaints = async function () {
    await dispatch(getAllComplaints());
  };
  useEffect(() => {
    getComplaints();
    setComplaints(allComplaints);
  }, []);

  useEffect(() => {
    setComplaints(allComplaints);
  }, [allComplaints]);

  //search settins here
  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    const items = complaints?.filter((item) => {
      return item.active_number.toString().match(searchInput.toString());
    });
    setFilteredItems(items);
  }, [searchInput, complaints]);

  useEffect(() => {
    const items = complaints?.filter((item) => {
      return item.isAssigned == Boolean(status);
    });
   console.log(status)
    setFilteredItems(items);
  }, [status, complaints]);
  // console.log(complaints)

  // pagination here
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const items = [...Array(100).keys()]; // Example data
  const handleChange = (event, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = filteredItems?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {complaintLoading && <Loader />}
      <div>
        <div className="mt-5">
          <h1 className="font-semibold text-2xl mb-2">Complaints</h1>
          {/* search button here */}
          <div className="flex items-center justify-between">
            <input
              className="w-[50%] rounded-sm"
              type="search"
              name="search_complaint"
              id=""
              placeholder="Search Complainant's contact without starting '0'"
              onChange={searchHandler}
              maxLength={9}
            />
            <select
              value={status}
              name="complaint_type"
              id=""
              onChange={(e) => {
                setStatus(e.target.value);
                getComplaints();
              }}
            >
              <option value="false">Unassigned</option>
              <option value="true">assigned</option>
            </select>
          </div>
          {/* search button here */}
          <div className="w-full mt-5">
            <table className="w-full border-2 border-black c-complains mb-8">
              <thead className="bg-blue-500 text-white border-b-4">
                <tr>
                  <td className="border-r-2  font-semibold text-xl py-3 w-1">
                    No.
                  </td>
                  <td className="border-r-2 font-semibold text-xl py-3">
                    Date Logged
                  </td>
                  <td className="border-r-2  font-semibold text-xl py-3">
                    Contacts
                  </td>
                  <td className="font-semibold text-xl py-3 ">
                    Complaint Type
                  </td>
                  <td className="font-semibold text-xl py-3 ">Status</td>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((complain, index) => (
                  <tr
                    key={index}
                    onClick={() =>
                      navigate(`/dashboard/coaching/${complain._id}`, {
                        state: complain,
                      })
                    }
                  >
                    {/* DEMO  */}
                    {/* <td className="border-r-2">
                      <span>{`${index + 1}. `}</span>
                    </td>
                    <td className="border-r-2">{complain.contact}</td>
                    <td className="border-r-2">{complain.type}</td>
                    <td>{complain.date}</td> */}

                    {/* ACTUAL */}
                    <td className="border-r-2">
                      <span>{`${index + 1}.`}</span>
                    </td>
                    <td>
                      {new Date(complain.createdAt).toLocaleString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </td>
                    <td className="border-r-2 ">{complain?.active_number}</td>
                    <td className="border-r-2">{complain?.complaint_type}</td>
                    <td className="border-r-2">
                      {" "}
                      {complain?.isAssigned ? (
                        <p className="bg-red-400 text-white px-5 py-2 text-center w-max rounded-sm">
                          assigned
                        </p>
                      ) : (
                        <p className="bg-green-400 text-white px-5 py-2 text-center w-max rounded-sm">
                          unassigned
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              {currentItems.length < 1 && (
                <h3 className="w-full text-center bg-slate-300 p-5 font-semibold text-md mb-5">
                  No Complaint Found
                </h3>
              )}
            </div>
            <Pagination
              count={Math.ceil(complaints?.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Complains;
