import SideBar from "./SideBar";

const DashBoard = () => {
  return (
    <div>
      <div className="container main--container">
        <div className="dashboard--sidebar">
          <SideBar />
        </div>
        <main className="dashboard--main--content">
          <div>dashboard</div>
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
