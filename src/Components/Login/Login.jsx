import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Reusable/Loader";
import { toast } from "react-toastify";
import { loginUser, RESET } from "../../Redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLoggedIn, isLoading, isSuccess } = useSelector((state) => state.auth);

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
    await dispatch(loginUser(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      window.setTimeout(()=>{
        navigate("/dashboard",{replace:true});
      },1000)
    }
    dispatch(RESET())
  }, [isSuccess, isLoggedIn]);

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
            id=""
            placeholder="Enter Phonenumber"
            onChange={changeHander}
            value={userData.phonenumber}
          />
          <br />
          <input
            className="w-full"
            type="password"
            name="password"
            id=""
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
