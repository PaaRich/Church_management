//import { complainsObj } from "./complainsObj";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllComplaints } from "../../../Redux/features/complaint/complaintSlice";
import Loader from "../../Reusable/Loader";

const Complains = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { complaintLoading, complaintSuccess, allComplaints } = useSelector(
    (state) => state.complaint
  );

  const [complaints, setComplaints] = useState(allComplaints);

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

  // console.log(complaints)

  return (
    <>
      {complaintLoading && <Loader />}
      <div>
        <div className="mt-5">
          <h1 className="font-semibold text-2xl">Complains</h1>
          <div className="w-full mt-5">
            <table className="w-full border-2 border-black c-complains">
              <thead className="bg-blue-500 text-white border-b-4">
                <tr>
                  <td className="border-r-2  font-semibold text-xl py-3 w-1">
                    No.
                  </td>
                  <td className="border-r-2 font-semibold text-xl py-3">
                    Date Created
                  </td>
                  <td className="border-r-2  font-semibold text-xl py-3">
                    Contacts
                  </td>
                  <td className="font-semibold text-xl py-3 ">
                    Complaint Type
                  </td>
                </tr>
              </thead>
              <tbody>
                {complaints?.map((complain, index) => (
                  <tr
                    key={index}
                    onClick={() =>
                      navigate(
                        `/dashboard/coaching/${complain.complaint_type}`,
                        { state: complain }
                      )
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
                    <td className="border-r-2">{complain.complaint_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Complains;
