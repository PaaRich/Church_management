import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Reusable/Loader";
import { toast } from "react-toastify";
import {  requestPasswordRequest, RESET } from "../../Redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {  isLoading, isSuccess } = useSelector(
    (state) => state.auth
  );

  const [phonenumber, setPhonenumber] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    let formattedNumber;
    if (!phonenumber) {
      return toast.error("Enter phone number");
    }
    if(phonenumber.length < 9){
      return toast.error("please enter a valid number")
    }
    if (phonenumber.startsWith("0")) {
      const number = phonenumber.slice(1);
      formattedNumber = `233${number}`;
    } else if (!phonenumber.startsWith("0")) {
      formattedNumber = `233${phonenumber}`;
    }
    await dispatch(requestPasswordRequest({ phonenumber: formattedNumber }))
  };

  useEffect(() => {
    dispatch(RESET());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
    dispatch(RESET());
  }, [isSuccess,dispatch, navigate]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <form action="" className="w-2/6" onSubmit={submitData}>
          <h2 className="text-xl font-bold text-center mb-5">
            Forgot Password
          </h2>
          <div className="relative gap-4">
            <div>
            <img className=" h-[38px] rounded-sm absolute left-2 top-2" src="/images/Flag_of_Ghana.svg.png" alt="Ghana flag" />
            </div>
          <input
            className="w-full pl-20"
            type="tel"
            name="phonenumber"
            id="phone"
            placeholder="Enter Phonenumber"
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
            value={phonenumber}
            maxLength={10}
            />
            </div>
          <br />
          <button
            type="submit"
            className="bg-teal-500 text-white p-3 w-full rounded-sm"
          >
            Send
          </button>
          <div className="text-right mt-5">
            <p className="text-teal-600">
              <Link to={"/login"}>back to login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
