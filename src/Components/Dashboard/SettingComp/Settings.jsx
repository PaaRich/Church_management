import { useState } from "react";

const Settings = () => {
  const [state, setState] = useState(false);
  const [tel, setTel] = useState("");
  return (
    <div>
      <h1 className="text-4xl font-semibold">Assign roles</h1>
      <form className="mt-5">
        <input
          className="mr-5 w-80"
          type="tel"
          name="tel"
          value={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
          placeholder="Enter +233*********"
        />
        <button
          className="w-20 bg-blue-600 cursor-pointer text-white p-3 rounded-sm hover:bg-blue-500 duration-300"
          onClick={(e) => {
            e.preventDefault();
            if (tel.length > 10 && tel.startsWith("+233")) setState(true);
          }}
        >
          Search
        </button>
      </form>
      {state && (
        <div className="mt-10">
          {/* display member field */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-10">
                <p>Name</p>
                <input className="outline-none" type="text" readOnly />
              </span>
              <span>
                <p>Role</p>
                <input className="outline-none" type="text" readOnly />
              </span>
            </div>
            <div>
              <select
                name="ministry"
                id=""
                className="cursor-pointer bg-slate-300 border-none mr-5"
              >
                <option value="" disabled selected>
                  Assign ministry
                </option>
                <option value="Adult ministry">Adult ministry</option>
                <option value="Adult ministry">Youth ministry</option>
                <option value="Adult ministry">Children ministry</option>
              </select>
              <select
                name="musted"
                id=""
                className="cursor-pointer bg-slate-300 border-none"
              >
                <option value="" disabled selected>
                  Assign musted
                </option>
                <option value="musted 1">musted 1</option>
                <option value="musted 2">musted 2</option>
                <option value="musted 3">musted 3</option>
              </select>
            </div>
          </div>
          <button className="float-right bg-green-500 cursor-pointer text-white p-3 w-40 rounded-sm hover:bg-green-400 duration-300">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;
