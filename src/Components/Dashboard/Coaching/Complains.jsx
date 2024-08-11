//import { Link } from "react-router-dom";
import { complainsObj } from "./complainsObj";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllComplaints } from "../../../Redux/features/complaint/complaintSlice";

const Complains = () => {
  
  return (
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
                <td className="font-semibold text-xl py-3 ">Complaint Type</td>
              </tr>
            </thead>
            <tbody>
              {complainsObj.map((complain, index) => (
                <tr key={index} className="duration-500">
                  {/* <Link
                    to={`/dashboard/coaching/${complain.contact}`}
                    state={complain}
                    className="w-full block"
                  >
                    <td className="border-r-2">
                      <span>{`${index + 1}. `}</span>
                    </td>
                    <td className="border-r-2">{complain.contact}</td>
                    <td className="border-r-2">{complain.type}</td>
                    <td>{complain.date}</td>
                  </Link> */}
                  <td className="border-r-2">
                    <span>{`${index + 1}.`}</span>
                  </td>
                  <td>{complain.date}</td>
                  <td className="border-r-2 ">{complain.contact}</td>
                  <td className="border-r-2">{complain.type}</td>
                </tr>
              ))}
              {/* <Link>
                <tr>
                  <td className="w-full">d</td>
                  <td className="w-full">d</td>
                  <td className="w-full">d</td>
                </tr>
              </Link> */}
            </tbody>
          </table>
          {/* <table>
              <thead></thead>
              <tbody></tbody>
            </table> */}
        </div>
      </div>
    </div>
  );
};

export default Complains;
