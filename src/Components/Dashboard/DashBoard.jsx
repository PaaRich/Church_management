import SideBar from "./SideBar";
import DashBoardHome from "./DashBoardHome";

const DashBoard = () => {
  return (
    <div>
      <div className="main--container">
        <div className="dashboard--sidebar">
          <SideBar />
        </div>
        <main className="dashboard--main--content">
          <DashBoardHome />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
