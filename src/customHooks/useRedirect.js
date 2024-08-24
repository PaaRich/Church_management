import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authServices from "../Redux/features/auth/authServices";

function useRedirect(path) {
  const navigate = useNavigate();

  useEffect(() => {
    let isLoggedIn;
    const redirectLoggedOutUsers = async () => {
      try {
        isLoggedIn = await authServices.getLoginStatus();
      } catch (error) {
        console.log(error.message);
      }
      if (!isLoggedIn) {
        toast.info("Session expired, please login to continue");
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUsers();
    return () => {
      redirectLoggedOutUsers;
    };
  }, [path, navigate]);
}
export default useRedirect;
