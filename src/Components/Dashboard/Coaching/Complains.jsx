//import { Link } from "react-router-dom";
import { complainsObj } from "./complainsObj";
import { Link } from "react-router-dom";

const Complains = () => {
  return (
    <div>
      <div className="mt-5">
        <h1 className="font-semibold text-2xl">Complains</h1>
        <div className="w-full mt-5">
          <table className="w-full border-2 c-complains">
            <thead>
              <tr>
                <td className="border-r-2 font-semibold text-xl py-3 w-1">
                  No.
                </td>
                <td className="border-r-2 font-semibold text-xl py-3">
                  Contact
                </td>
                <td className="border-r-2 font-semibold text-xl py-3">
                  Complain type
                </td>
                <td className="font-semibold text-xl py-3">Date Created</td>
              </tr>
            </thead>
            <tbody>
              {complainsObj.map((complain, index) => (
                <tr key={index}>
                  <Link
                    to={`/dashboard/coaching/${complain.contact}`}
                    state={complain}
                    className="w-full"
                  >
                    <td className="border-r-2">
                      <span>{`${index + 1}. `}</span>
                    </td>
                    <td className="border-r-2">{complain.contact}</td>
                    <td className="border-r-2">{complain.type}</td>
                    <td>{complain.date}</td>
                  </Link>
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
