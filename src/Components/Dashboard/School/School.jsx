import BackBtn from "../../Reusable/BackBtn";

function School() {
  return (
    <div className="w-5/6">
      <div className="flex items-center justify-between">
        <BackBtn text="Foundational School" paddingAndMargin="mb-3 p-2" />
        <div className="relative w-52">
          <select
            className="py-2 px-5 w-full bg-slate-200 cursor-pointer"
            name="Action"
            id=""
          >
            <option value="" disabled selected>
              Action
            </option>
            <option value="Schedule Meeting">Schedule Meeting</option>
            <option value="Take a Lesson">Take a Lesson</option>
            <option value="Exams">Exams</option>
          </select>
        </div>
      </div>
      <div className="flex items-start justify-between mt-20">
        <div className="w-2/5 relative">
          <select
            className="py-3 px-5 w-full bg-slate-200 cursor-pointer"
            name="Platform"
            id=""
          >
            <option value="" disabled selected>
              Select Platform
            </option>
            <option value="Zoom">Zoom</option>
            <option value="Google Meet">Google Meet</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Telegram">Telegram</option>
          </select>
        </div>
        <div className="w-2/5 relative">
          <select
            className="py-3 px-5 w-full bg-slate-200 cursor-pointer"
            name="Group"
            id=""
          >
            <option value="" disabled selected>
              Target Group
            </option>
            <option value="Mustard Seed President">
              Mustard Seed President
            </option>
            <option value="Workers">Workers</option>
            <option value="Ministry Presidents">Ministry Presidents</option>
            <option value="District Pastors">District Pastors</option>
          </select>
        </div>
      </div>
      <div className="w-full relative">
        <button className="bg-slate-950 hover:bg-slate-800 duration-200 text-white mt-10 py-4 w-3/6 absolute left-1/2 -translate-x-1/2 rounded ">
          Scheduling Meeting
        </button>
      </div>
    </div>
  );
}

export default School;
