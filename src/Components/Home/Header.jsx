import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="row pt-20 max-md:pt-5 pb-5">
      <div className="container">
        <div className="flex justify-between gap-14 max-sm:gap-8 py-14 max-lg:flex-col-reverse max-sm:pt-2">
          <div className="header--text w-[50%] max-lg:w-full">
            <h3 className="text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-10 capitalize">
              Enhancing Church Life Through Smart Management
            </h3>
            <p>
              Easily register members, assign them to ministries, manage events,
              and handle complaints all in one platform. We empower our
              congregation with access to church videos and resources while
              staying connected to your church community.
            </p>
            <div className="buttons">
              <button className="  mt-5 shadow-xl mr-5">
                <Link
                  className="flex bg-gray-800 text-white px-10 py-3"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              </button>
              <button className=" mt-5 shadow-xl">
                <Link
                  className="px-10 py-3 flex bg-gray-800 text-white "
                  to={"/login"}
                >
                  Login
                </Link>
              </button>
            </div>
          </div>
          <img
            className="w-[50%] max-lg:w-full"
            src="/images/cci-logo-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
