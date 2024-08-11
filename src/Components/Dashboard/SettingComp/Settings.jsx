import { useState } from "react";
import { Link } from "react-router-dom";
//import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";


const Settings = () => {
  const [state, setState] = useState(false);
  const [tel, setTel] = useState("");
  return (
    <div className="mt-3">
      <div>
        <h1 className="text-2xl font-semibold">Modify Member Information</h1>
        <form className="mt-5">
          <input
            className="mr-5 w-[40%]"
            type="tel"
            name="tel"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
            placeholder="Search Phone Number"
          />
          <button
            className=" bg-blue-600 cursor-pointer shadow-lg text-white p-3 px-8 rounded-sm hover:bg-blue-500 duration-300 "
            onClick={(e) => {
              e.preventDefault();
              if (tel.length > 10 && tel.startsWith("+233")) setState(true);
            }}
          >
            Search
          </button>
        </form>
        {!state && (
          <div className="mt-5">
            <div className="w-[70%] flex items-center justify-between gap-5 shadow-md p-3 px-5 rounded-xl border-2 border-slate-300">
              <div>
                <h5 className="font-semibold text-lg mb-1">Phone</h5>
                <p>233545143000</p>
              </div>
              <div>
                <h5 className="font-semibold text-lg mb-1">First Name</h5>
                <p>Daniel</p>
              </div>
              <div>
                <h5 className="font-semibold text-lg mb-1">Current Position</h5>
                <p>member</p>
              </div>
              <button className="shadow-lg">
                <Link
                  to={"/dashboard/edit-user"}
                  className="bg-teal-500 hover:bg-teal-400 duration-500 p-3 px-5 text-white rounded-sm"
                >
                  Modify
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold">Ministry Settings</h3>
          <button className="mt-5 bg-teal-500 hover:bg-teal-400 duration-500 p-3 px-5 text-white rounded-sm">
            Add Ministry
          </button>
          <table className="mt-5 w-full text-left border-[2px] border-slate-300">
            <thead>
              <tr>
                <th>Ministry</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Children Ministry</td>
                <td className="flex gap-3">
                  <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                  <FiEdit />
                  </span>
                  &nbsp;{" "}
                  <span className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400">
                  <BsTrash3 />
                  </span>
                </td>
              </tr>
              <tr>
                <td>Youth Ministry</td>
                <td className="flex gap-3">
                  <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                  <FiEdit />
                  </span>
                  &nbsp;{" "}
                  <span className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400">
                  <BsTrash3 />
                  </span>
                </td>
              </tr>
              <tr>
                <td>Women Ministry</td>
                <td className="flex gap-3">
                  <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                  <FiEdit />
                  </span>
                  &nbsp;{" "}
                  <span className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400">
                  <BsTrash3 />
                  </span>
                </td>
              </tr>
              <tr>
                <td>Men Ministry</td>
                <td className="flex gap-3">
                  <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                  <FiEdit />
                  </span>
                  &nbsp;{" "}
                  <span className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400">
                  <BsTrash3 />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Mustard Settings</h3>
          <button className="mt-5 bg-teal-500 hover:bg-teal-400 duration-500 p-3 px-5 text-white rounded-sm">
            Add Mustard
          </button>
          <table className="mt-5 w-full text-left border-[2px] border-slate-300">
            <thead>
              <tr>
                <th>Mustard</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Children Ministry</td>
                <td className="flex gap-3">
                  <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                  <FiEdit />
                  </span>
                  &nbsp;{" "}
                  <span className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400">
                  <BsTrash3 />
                  </span>
                </td>
              </tr>
              <tr>
                <td>Youth Ministry</td>
                <td className="flex gap-3">
                  <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                  <FiEdit />
                  </span>
                  &nbsp;{" "}
                  <span className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400">
                  <BsTrash3 />
                  </span>
                </td>
              </tr>
              <tr>
                <td>Women Ministry</td>
                <td className="flex gap-3">
                  <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                  <FiEdit />
                  </span>
                  &nbsp;{" "}
                  <span className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400">
                  <BsTrash3 />
                  </span>
                </td>
              </tr>
              <tr>
                <td>Men Ministry</td>
                <td className="flex gap-3">
                  <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                  <FiEdit />
                  </span>
                  &nbsp;{" "}
                  <span className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400">
                  <BsTrash3 />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Settings;
