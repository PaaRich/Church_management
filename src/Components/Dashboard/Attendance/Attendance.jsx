import BackBtn from "../../Reusable/BackBtn";

function Attendance() {
  return (
    <div>
      <BackBtn text="Attendance" paddingAndMargin="mb-3 p-3" />
      <form action="" className="relative">
        <div className="flex items-center justify-around">
          <div className="relative w-1/3">
            <select
              className="py-4 px-5 w-full bg-slate-200"
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
            className="w-1/3 py-4 px-3 text-lg bg-slate-200"
            type="text"
            name=""
            id=""
            placeholder="Enter ID"
          />
        </div>
        <div className="c-check-in-btn mt-20">
          <button
            type="submit"
            className="border-0 w-80 text-white py-4 text-lg"
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
