//import React from "react";
import MustardChapter from "./MustardChapter";
import { Chapters } from "./Chapters";
import BackBtn from "../../Reusable/BackBtn";

function Mustard() {
  return (
    <div className="h-full">
      <BackBtn text="Mustard" paddingAndMargin="mb-3 p-3" />
      <div className="grid gap-y-10 w-11/12 m-auto grid-cols-2">
        {Chapters.map((item) => (
          <MustardChapter
            key={item.name}
            chapter={item.chapter}
            roll={item.roll}
            location={item.location}
            //img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Mustard;
