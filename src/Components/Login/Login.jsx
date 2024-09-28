import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Reusable/Loader";
import { toast } from "react-toastify";
import { loginUser, RESET } from "../../Redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, isSuccess } = useSelector(
    (state) => state.auth
  );

  const [userData, setUserData] = useState({
    phonenumber: "",
    password: "",
  });

  const changeHander = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    let formattedNumber;
    if (!userData.phonenumber || !userData.password) {
      return toast.error("All fields are required");
    }
    if (!userData.phonenumber.match(/[0-9]/)) {
      return toast.error("please enter a valid number");
    }
    if (userData.phonenumber < 9) {
      return toast.error("please enter a valid number");
    }
    if (userData.phonenumber.startsWith("0")) {
      const number = userData.phonenumber.slice(1);
      formattedNumber = `233${number}`;
      // console.log(userData.phonenumber)
    } else if (!userData.phonenumber.startsWith("0")) {
      formattedNumber = `233${userData.phonenumber}`;
    }
    await dispatch(
      loginUser({ phonenumber: formattedNumber, password: userData.password })
    );
  };

  useEffect(() => {
    dispatch(RESET());
  }, []);

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
    dispatch(RESET());
  }, [isSuccess, isLoggedIn, dispatch, navigate]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex flex-col items-center justify-center h-screen gap-5 p-4">
        <div className="flex items-center flex-col mb-10">
          <img src="/images/images.jpeg" className="w-[150px] h-[150px] max-sm:h-[100px] max-sm:w-[100px]" alt="" />
          <p className="text-xl uppercase font-semibold text-center">
          Chirst Cosmopolitan Incorporated
          </p>
        </div>
        <form
          action=""
          className="w-2/6 max-lg:w-3/6 max-md:w-5/6 max-sm:w-full border-2 p-8 max-md:p-4"
          onSubmit={submitData}
        >
          <h2 className="text-xl font-bold text-center mb-5">Login</h2>
          <div className="relative gap-4">
            <div>
              <img
                className=" h-[38px] rounded-sm absolute left-2 top-2 "
                src="/images/Flag_of_Ghana.svg.png"
                alt="Ghana flag"
              />
            </div>
            <input
              className="w-full pl-20"
              type="tel"
              name="phonenumber"
              id="phone"
              placeholder="Enter Phonenumber"
              onChange={changeHander}
              value={userData.phonenumber}
              maxLength={10}
            />
          </div>
          <br />
          <input
            className="w-full"
            type="password"
            name="password"
            id="pass"
            placeholder="Enter Password"
            onChange={changeHander}
            value={userData.password}
          />{" "}
          <br />
          <button
            type="submit"
            className="bg-teal-500 text-white p-3 w-full rounded-sm"
          >
            Login
          </button>
          <div className="text-right mt-5">
            <p className="text-teal-600">
              <Link to={"/forgot-password"}>forgot password?</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
