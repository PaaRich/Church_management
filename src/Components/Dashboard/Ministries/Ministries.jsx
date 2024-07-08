//import React from "react";
import BackBtn from "../../Reusable/BackBtn";
import { MinistriesObj } from "../Ministries/MinistriesObj";
import MustardChapter from "../Mustard/MustardChapter";

function Ministries() {
  return (
    <div className="h-full">
      <BackBtn text="Ministries" paddingAndMargin="mb-3 p-3" />
      <div className="grid gap-y-10 w-11/12 m-auto grid-cols-2">
        {MinistriesObj.map((item) => (
          <MustardChapter
            key={item.location}
            chapter={item.ministries}
            roll={item.roll}
            location={item.location}
            //img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Ministries;
