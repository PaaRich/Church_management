import { complainsObj } from "./complainsObj";
import { useNavigate } from "react-router-dom";

const Complains = () => {
  const navigate = useNavigate();

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
                  Contact
                </td>
                <td className="border-r-2  font-semibold text-xl py-3">
                  Complain type
                </td>
                <td className="font-semibold text-xl py-3 ">Date Created</td>
              </tr>
            </thead>
            <tbody>
              {complainsObj.map((complain, index) => (
                <tr
                  key={index}
                  className="duration-500 "
                  onClick={() =>
                    navigate(`${complain.contact}`, { state: complain })
                  }
                >
                  <td className="border-r-2">
                    <span>{`${index + 1}.`}</span>
                  </td>
                  <td className="border-r-2 ">{complain.contact}</td>
                  <td className="border-r-2">{complain.type}</td>
                  <td>{complain.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Complains;
