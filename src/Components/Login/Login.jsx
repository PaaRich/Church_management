import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Reusable/Loader";
import { toast } from "react-toastify";
import { loginUser, RESET } from "../../Redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

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

    if (!userData.phonenumber || !userData.password) {
      return toast.error("all fields are required");
    }
    if (userData.phonenumber.startsWith("0")) {
      const formattedNumber = userData.phonenumber.slice(1);
      userData.phonenumber = `233${formattedNumber}`;
      // console.log(userData.phonenumber)
    } else if (!userData.phonenumber.startsWith("0")) {
      userData.phonenumber = `233${userData.phonenumber}`;
    }
    await dispatch(loginUser(userData));
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
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <form action="" className="w-2/6" onSubmit={submitData}>
          <h2 className="text-xl font-bold text-center mb-5">Login</h2>
          <input
            className="w-full"
            type="tel"
            name="phonenumber"
            id="phone"
            placeholder="Enter Phonenumber"
            onChange={changeHander}
            value={userData.phonenumber}
            maxLength={10}
          />
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
        </form>
      </div>
    </>
  );
}

export default Login;
