//import React from "react";
import MustardChapter from "./MustardChapter";
import { Chapters } from "./Chapters";
import BackBtn from "../../Reusable/BackBtn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMustards } from "../../../Redux/features/mustard/mustardSlice";
import { useEffect, useState } from "react";
import Loader from "../../Reusable/Loader";

function Mustard() {
  const dispatch = useDispatch();
  const { mustardLoading, allMustards } = useSelector((state) => state.mustard);

  const [mustards, setMustards] = useState(allMustards);
  const getAllMustards = async function () {
    await dispatch(getMustards());
  };
  useEffect(() => {
    getAllMustards();
    setMustards(allMustards);
  }, []);
  useEffect(() => {
    setMustards(allMustards);
  }, [allMustards]);

  return (
    <>
    {mustardLoading && <Loader/>}
    <div className="h-full">
      <BackBtn
        text="Mustard"
        paddingAndMargin="mb-3 p-2"
        path={"/dashboard/reports/attendance"}
      />
      <div className="grid gap-y-10 w-11/12 m-auto grid-cols-2">
        {mustards?.map((item, index) => (
          <Link to={`/dashboard/mustard_seed/${item?.mustard}`} key={item?._id}>
            <MustardChapter
              chapter={item?.mustard.toUpperCase()}
              roll={1.5}
              location={"N/A"}
              //img={item.img}
            />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default Mustard;
