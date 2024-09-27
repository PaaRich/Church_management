/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import useRedirect from "../../customHooks/useRedirect";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { getLoginStatus, RESET } from "../../Redux/features/auth/authSlice";
//import DashBoardHome from "./DashBoardHome";

const DashBoard = ({ children }) => {
  useRedirect("/login");

  const dispatch = useDispatch();
  const { isLoading, activeUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState(activeUser);
  const [imageLoaded, setImageLoaded] = useState(true);

  const toggleBar = function () {
    const sidebarLinks = document.querySelectorAll(".sidebar--links li");
    const sidebar = document.querySelector(".dashboard--sidebar");
    sidebar.classList.toggle("sidebar--active");

    sidebarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("sidebar--active");
      });
    });
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  useEffect(() => {
    dispatch(RESET());
  }, [dispatch]);

  const getStatus = async () => {
    await dispatch(getLoginStatus());
  };
  useEffect(() => {
    getStatus();
    setUser(activeUser);
  }, []);
  useEffect(() => {
    setUser(activeUser);
  }, [activeUser]);

  return (
    <div>
      <div className="main--container">
        <div className={"dashboard--sidebar"}>
          <SideBar user={user} />
        </div>
        <main className="dashboard--main--content">
          <div className="dashboard-home-header flex gap-8 max-sm:gap-5 justify-end p-3 pr-5 shadow-md pb-0">
            <form action="" className="w-full text-right">
              <input
                type="text"
                placeholder="Search..."
                className="px-5 py-3 rounded-full bg-slate-100 w-[40%] outline-blue-300/80 max-md:w-[60%] max-sm:w-full"
              />
            </form>
            <img
              className=" w-[50px] h-[50px] rounded-full max-md:hidden"
              src={imageLoaded ? user?.user_photo : "/images/avatar.webp"}
              alt="avatar"
              onError={handleImageError}
            />
            <button
              id="hamburger"
              className="hamburger hidden max-lg:block focus:outline-none max-lg:text-black pb-3"
              onClick={toggleBar}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
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
