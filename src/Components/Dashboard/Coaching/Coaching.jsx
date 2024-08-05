//import React from "react";
import BackBtn from "../../Reusable/BackBtn";
import { Outlet } from "react-router-dom";

function Coaching() {
  return (
    <div className="px-5">
      <BackBtn
        text="Foundational School"
        paddingAndMargin="mb-2 p-2"
        path={"/dashboard/ministries"}
      />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Coaching;
