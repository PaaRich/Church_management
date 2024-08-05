/* eslint-disable react/prop-types */
//import React from 'react'
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const BackBtn = ({ text, paddingAndMargin, path }) => {
  const navigate = useNavigate(-1);
  return (
    <div
      className={`${paddingAndMargin} border-2 flex items-center text-md hover:bg-slate-900 hover:border-slate-900 hover:text-white duration-500 cursor-pointer w-fit`}
      onClick={() => navigate(path)}
    >
      <IoIosArrowBack size={24} />
      {text}
    </div>
  );
};

export default BackBtn;
