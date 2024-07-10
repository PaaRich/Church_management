/* eslint-disable react/prop-types */
//import React from 'react'
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const BackBtn = ({ text, paddingAndMargin }) => {
  const navigate = useNavigate(-1);
  return (
    <div
      className={`${paddingAndMargin} flex items-center text-xl hover:bg-slate-900 hover:text-white duration-500 cursor-pointer w-fit`}
      onClick={() => navigate(-1)}
    >
      <IoIosArrowBack size={24} />
      {text}
    </div>
  );
};

export default BackBtn;
