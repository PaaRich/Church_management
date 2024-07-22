//import React from 'react'
import BackBtn from "../../Reusable/BackBtn";

const Communications = () => {
  return (
    <div className="flex">
      <div className="w-1/2 border-r-2 ">
        <BackBtn text="Communication" paddingAndMargin="mb-2 p-2" path={'/dashboard/school'} />
        <form>
          <p className="text-xl font-medium mb-2">Broadcast</p>
          <div className="flex items-center justify-between w-11/12">
            <select
              className="py-2 px-5 w-2/3 mr-2 bg-slate-200 cursor-pointer"
              name="Platform"
              id=""
            >
              <option value="" disabled selected>
                Platform
              </option>
              <option value="SMS">SMS</option>
              <option value="Email">Email</option>
            </select>
            <select
              className="py-2 px-5 w-2/3 ml-2 bg-slate-200 cursor-pointer"
              name="Target People"
              id=""
            >
              <option value="" disabled selected>
                Target People
              </option>
              <option value="General">General</option>
              <option value="Pastors">Pastors</option>
              <option value="Workers">Workers</option>
            </select>
          </div>
          <textarea
            className="w-11/12 h-40 resize-none outline-none bg-slate-200 mt-5 p-3"
            name=""
            id=""
            placeholder="Message"
          />
          <button className="bg-blue-600 hover:bg-blue-500 duration-200 text-white py-3 px-14 rounded-md mt-5">
            Submit
          </button>
        </form>
        <div className="mt-5">
          <p className="text-xl my-3 font-medium">Follow up</p>
          <select
            className="py-2 px-5 w-2/3 bg-slate-200 cursor-pointer"
            name="Follow up"
            id=""
          >
            <option value="" disabled selected>
              Follow up
            </option>
            <option value="Harvest">Harvest</option>
            <option value="Engagement">Engagement</option>
            <option value="Retention">Retention</option>
          </select>
        </div>
      </div>
      <div className="w-1/2 px-5">
        <p className="my-4 text-xl font-medium">Memo</p>
        <div>
          <p className="text-lg mb-1">Upload</p>
          <span>
            <input
              className="mb-0 mr-5 w-2/3"
              type="text"
              placeholder="Title"
            />
            <button className="py-2 px-4 bg-slate-800 hover:bg-slate-700 duration-200 text-white rounded-md">
              File
            </button>
          </span>
          <button className="bg-blue-700 hover:bg-blue-600 duration-200 text-white py-2 w-2/3 rounded-lg mt-2">
            Upload
          </button>
          <div className="mt-3">
            <p className="text-xl font-medium">Search</p>
            <span>
              <input className="w-2/3 mr-5" type="search" placeholder="Title" />
              <button className="py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md">
                Find
              </button>
            </span>
          </div>
        </div>
        <div>
          <p className="my-4 text-xl font-medium">Minutes</p>
          <p className="text-lg mb-1">Upload</p>
          <span>
            <input
              className="mb-0 mr-5 w-2/3"
              type="text"
              placeholder="Title"
            />
            <button className="py-2 px-4 bg-slate-800 hover:bg-slate-700 duration-200 text-white rounded-md">
              File
            </button>
          </span>
          <button className="bg-blue-700 hover:bg-blue-600 duration-200 text-white py-2 w-2/3 rounded-lg mt-2">
            Upload
          </button>
          <div className="mt-3">
            <p className="text-xl font-medium">Search</p>
            <span>
              <input className="w-2/3 mr-5" type="search" placeholder="Title" />
              <button className="py-2 px-4 bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-md">
                Find
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communications;
