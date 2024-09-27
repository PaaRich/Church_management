import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const { isLoggedIn, activeUser } = useSelector((state) => state.auth);
  return (
    <nav className="bg-blue-700 text-white py-2">
      <div className="row">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="logo font-semibold text-xl">CCI SUNYANI</div>
            <ul className="flex items-center gap-5 uppercase">
              <li>
                <Link className="font-semibold">Home</Link>
              </li>
              {isLoggedIn && (
                <li className="underline">
                  <Link>{activeUser?.firstname}</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
