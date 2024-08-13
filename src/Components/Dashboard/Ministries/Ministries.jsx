//import React from "react";
import BackBtn from "../../Reusable/BackBtn";
import { MinistriesObj } from "../Ministries/MinistriesObj";
import MustardChapter from "../Mustard/MustardChapter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMinistries } from "../../../Redux/features/ministry/ministrySlice";
import { useEffect, useState } from "react";
import Loader from "../../Reusable/Loader";

function Ministries() {
  const dispatch = useDispatch();
  const { ministryLoading, allMinistries } = useSelector(
    (state) => state.ministry
  );

  const [ministries, setMinistries] = useState(allMinistries);
  const getAllMinistries = async function () {
    await dispatch(getMinistries());
  };
  useEffect(() => {
    getAllMinistries();
    setMinistries(allMinistries);
  }, []);
  useEffect(() => {
    setMinistries(allMinistries);
  }, [allMinistries]);

  return (
    <>
    {ministryLoading && <Loader/>}
    <div className="h-full">
      <BackBtn
        text="Ministries"
        paddingAndMargin="mb-3 p-2"
        path={"/dashboard/mustard_seed"}
      />
      <div className="grid gap-y-10 w-11/12 m-auto grid-cols-2">
        {ministries?.map((item) => (
          <Link
            to={`/dashboard/ministries/${item?.ministry}`}
            key={item?._id}
          >
            <MustardChapter
              chapter={item?.ministry?.toUpperCase()}
              roll={1.2}
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

export default Ministries;
