//import React from "react";
import BackBtn from "../../Reusable/BackBtn";
import { MinistriesObj } from "../Ministries/MinistriesObj";
import MustardChapter from "../Mustard/MustardChapter";
import { Link } from "react-router-dom";

function Ministries() {
  return (
    <div className="h-full">
      <BackBtn text="Ministries" paddingAndMargin="mb-3 p-2" />
      <div className="grid gap-y-10 w-11/12 m-auto grid-cols-2">
        {MinistriesObj.map((item) => (
          <Link
            to={`/dashboard/ministries/${item.ministries}`}
            key={item.location}
          >
            <MustardChapter
              chapter={item.ministries}
              roll={item.roll}
              location={item.location}
              //img={item.img}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Ministries;
