/* eslint-disable react/prop-types */
import SideBar from "./SideBar";
//import DashBoardHome from "./DashBoardHome";

const DashBoard = ({ children }) => {
  return (
    <div>
      <div className="main--container">
        <div className="dashboard--sidebar">
          <SideBar />
        </div>
        <main className="dashboard--main--content">
          <div className="dashboard-home-header flex gap-8  justify-end p-3 pr-5 shadow-md pb-0">
            <form action="" className="w-full text-right">
              <input
                type="text"
                placeholder="Search..."
                className="px-5 py-3 rounded-full bg-slate-100 w-[40%] outline-blue-300/80"
              />
            </form>
            <img
              className=" w-[50px] h-[50px]"
              src="/images/avatar2.webp"
              alt="avatar"
            />
          </div>
          <div className="p-5 w-full overflow-y-scroll h-[85vh]">
            {children}
          </div>
          {/* <DashBoardHome /> */}
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
