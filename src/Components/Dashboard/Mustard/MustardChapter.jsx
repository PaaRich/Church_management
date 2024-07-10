/* eslint-disable react/prop-types */
//import React from 'react';
import img from "../../../../public/images/avatar2.webp";
import { IoLocationOutline } from "react-icons/io5";
const MustardChapter = ({ chapter, roll, location }) => {
  return (
    <div className="w-96 flex items-center bg-slate-50 shadow-md h-52 cursor-pointer hover:scale-105 duration-300">
      <div className="w-1/2 bg-yellow-300">
        <img className="w-full h-full" src={img} alt="chapter_img" />
      </div>
      <div className="w-1/2 text-center">
        <p>{chapter}</p>
        <div className="my-5">
          <h1 className="text-xl font-semibold">
            {roll}
            {roll > 1000 && "k"}
          </h1>
          <p>member</p>
        </div>
        <div>
          <IoLocationOutline size={24} className="inline mr-2" />
          {location}
        </div>
      </div>
    </div>
  );
};

export default MustardChapter;
