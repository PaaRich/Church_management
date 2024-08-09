import { useState } from "react";
import { Link } from "react-router-dom";

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
                <Link to={"/dashboard/edit-user"} className="bg-teal-500 hover:bg-teal-400 duration-500 p-3 px-5 text-white rounded-sm">
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
              <td>edit | del</td>
            </tr>
            <tr>
              <td>Youth Ministry</td>
              <td>edit | del</td>
            </tr>
            <tr>
              <td>Women Ministry</td>
              <td>edit | del</td>
            </tr>
            <tr>
              <td>Men Ministry</td>
              <td>edit | del</td>
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
              <td><span className="cursor-pointer py-1 px-2 bg-green-400 rounded text-white">edit</span> &nbsp;  <span className="cursor-pointer py-1 px-2 bg-red-400 rounded text-white"> del</span></td>
            </tr>
            <tr>
              <td>Youth Ministry</td>
              <td><span className="cursor-pointer border-2 p-1" >edit</span> | <span className="cursor-pointer border-2 p-1">del</span></td>
            </tr>
            <tr>
              <td>Women Ministry</td>
              <td><span className="cursor-pointer border-2 p-1">edit</span> | <span className="cursor-pointer border-2 p-1">del</span></td>
            </tr>
            <tr>
              <td>Men Ministry</td>
              <td><span className="cursor-pointer border-2 p-1">edit</span> | <span className="cursor-pointer border-2 p-1">del</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Settings;
