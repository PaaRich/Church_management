import BackBtn from "../../Reusable/BackBtn";

function Reports() {
  return (
    <div className="h-[80vh]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-1/3">
          <BackBtn text="Report" paddingAndMargin="p-3 mb-3" path={'/dashboard/attendance'} />
          <p className="text-xl">Attendance</p>
        </div>
        <button className="bg-green-600 cursor-pointer text-white p-3 rounded-sm hover:bg-green-500 duration-300">
          Download Report
        </button>
      </div>
      <form
        action=""
        className="bg-slate-50 shadow-md pl-3 flex items-center rounded-md w-fit mt-5"
      >
        <label className="flex items-center mr-5" htmlFor="">
          Start
          <input className="mb-0 ml-2" type="date" />
        </label>
        <label className="flex items-center mr-5" htmlFor="">
          End
          <input className="mb-0 ml-2" type="date" />
        </label>
        <label className="flex items-center mr-5" htmlFor="">
          Meeting
          <input className="mb-0 ml-2" type="text" />
        </label>
        <button
          onClick={(e) => e.preventDefault}
          className="bg-blue-700 hover:bg-blue-500 duration-300 p-4 rounded-e-md text-white"
          type="submit"
        >
          Generate
        </button>
      </form>
    </div>
  );
}

export default Reports;
