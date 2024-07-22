import BackBtn from "../../Reusable/BackBtn";

function School() {
  return (
    <div className="w-full px-10 mt-5">
      <div className="flex items-center justify-between">
        <BackBtn text="Foundational School" paddingAndMargin="mb-3 p-2" path={'/dashboard/coaching'}/>
        <div className="relative w-[40%]">
          <select
            className="py-3 px-5 w-full bg-slate-200 cursor-pointer"
            name="Action"
            id=""
          >
            <option value="Schedule Meeting">Schedule Meeting</option>
            <option value="Take a Lesson">Take a Lesson</option>
            <option value="Exams">Exams</option>
          </select>
        </div>
      </div>
      <div className="flex items-start justify-between gap-10 mt-10">
        <div className="w-full relative">
          <select
            className="py-3 px-5 w-full bg-slate-200 cursor-pointer"
            name="Platform"
            id=""
          >
            <option value="" disabled>
              Select Platform
            </option>
            <option value="Zoom">Zoom</option>
            <option value="Google Meet">Google Meet</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Telegram">Telegram</option>
          </select>
        </div>
        <div className="w-full relative">
          <select
            className="py-3 px-5 w-full bg-slate-200 cursor-pointer"
            name="Group"
            id=""
          >
            <option value="" disabled>
              Target Group
            </option>
            <option value="Mustard Seed Presidents">
              Mustard Seed Presidents
            </option>
            <option value="Workers">Workers</option>
            <option value="Ministry Presidents">Ministry Presidents</option>
            <option value="District Pastors">District Pastors</option>
          </select>
        </div>
      </div>
      <div>
        <textarea className="border-2 border-slate-200/80 w-full p-5 resize-none mt-5 rounded-sm" name="" id="" cols="30" rows="6" placeholder="Information about Meeting"></textarea>
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
