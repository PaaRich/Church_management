const LogComplain = () => {
  return (
    <div>
      <p className="font-semibold text-2xl">Log Complain</p>
      <form className=" mt-5">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <input
              className="mb-0 w-full mr-10 pl-3"
              type="text"
              placeholder="Person's name"
            />
          </div>
          <div>
            <input
              className="mb-0 w-full mr-10 pl-3"
              type="text"
              placeholder="Complain Type"
            />
          </div>
          <div className="col-span-2">
            <textarea
              className="p-5 border-2 border-slate-200/80 w-full  resize-none"
              name="complain"
              id=""
              cols="30"
              rows="7"
              placeholder="Enter Complain"
            ></textarea>
          </div>
        </div>
        <button
          className="bg-blue-500 py-3 px-6 w-1/5 mt-4 text-white rounded-sm hover:bg-blue-400 duration-200"
          type="submit"
        >
          Log
        </button>
      </form>
    </div>
  );
};

export default LogComplain;
