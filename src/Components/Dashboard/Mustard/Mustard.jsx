//import React from "react";
import MustardChapter from "./MustardChapter";
import { Chapters } from "./Chapters";
import BackBtn from "../../Reusable/BackBtn";
import { Link } from "react-router-dom";

function Mustard() {
  return (
    <div className="h-full">
      <BackBtn text="Mustard" paddingAndMargin="mb-3 p-2" path={'/dashboard/reports/attendance'} />
      <div className="grid gap-y-10 w-11/12 m-auto grid-cols-2">
        {Chapters.map((item, index) => (
          <Link to={`/dashboard/mustard_seed/${item.chapter}`} key={index}>
            <MustardChapter
              chapter={item.chapter}
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

export default Mustard;
