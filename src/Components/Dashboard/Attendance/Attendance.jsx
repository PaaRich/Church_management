import BackBtn from "../../Reusable/BackBtn";

function Attendance() {
  return (
    <div className="mt-5">
      <BackBtn text="Attendance" paddingAndMargin="mb-3 p-2" path={'/dashboard/forms'} />
      <form action="" className="relative">
        <div className="flex items-center gap-10">
          <div className="relative w-full">
            <select
              className="py-4 px-5 w-full bg-slate-200 cursor-pointer"
              name="Select Meeting"
              id=""
            >
              <option value="" disabled selected>
                Select Meeting
              </option>
              <option value="General Meeting">General Meeting</option>
              <option value="Mustard seed Meeting">Mustard seed Meeting</option>
              <option value="Ministry Meeting">Ministry Meeting</option>
            </select>
          </div>
          <input
            className="w-full py-4 px-3 text-lg bg-slate-200"
            type="text"
            name=""
            id=""
            placeholder="Enter ID"
          />
        </div>
        <div className="w-full relative mt-20">
          <button
            type="submit"
            className="border-0 w-80 text-white py-4 text-lg absolute left-1/2 -translate-x-1/2 bg-slate-900 hover:bg-slate-800 duration-200 rounded"
            onClick={(e) => e.preventDefault}
          >
            Check-in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Attendance;
