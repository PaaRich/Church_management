import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  getMe,
  RESET,
} from "../../../Redux/features/auth/authSlice";
import { toast } from "react-toastify";

function UserProfile() {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, user } = useSelector((state) => state.auth);

  const passwordInitials = {
    currentPassword: "",
    password: "",
    confirmPassword: "",
  };
  const userInitials = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    location: "",
    school: "",
  };
  const [userData, setUserData] = useState(userInitials);
  const [passwordData, setPasswordData] = useState(passwordInitials);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [passwordSubmitted, setPasswordSubmitted] = useState(false);
  // const [userInfo, setUserInfo] = useState(userInitials);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  useEffect(() => {
    const getUser = async function () {
      await dispatch(getMe());
    };
    getUser();

    setUserData((prev) => ({
      ...prev,
      firstname: user?.firstname,
      lastname: user?.lastname,
      phonenumber: user?.phonenumber,
      location: user?.location,
      school: user?.school,
    }));
  }, []);

  useEffect(() => {
    setUserData((prev) => ({
      ...prev,
      firstname: user?.firstname,
      lastname: user?.lastname,
      phonenumber: user?.phonenumber,
      location: user?.location,
      school: user?.school,
    }));
  }, [user]);

  const handleInputChange = function (e) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordChange = function (e) {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handlePasswordSubmit = async function (e) {
    e.preventDefault();
    if (
      !passwordData.confirmPassword ||
      !passwordData.password ||
      !passwordData.currentPassword
    ) {
      return toast.error("All fields are required");
    }
    if (passwordData.password !== passwordData.confirmPassword) {
      return toast.error("passwords do not match");
    }
    if (passwordData.password.length < 6) {
      return toast.error("password cannot be less than 6 characters");
    }
    await dispatch(changePassword(passwordData));
  };

  useEffect(() => {
    if (isSuccess) {
      setPasswordData(passwordInitials);
    }
    dispatch(RESET());
  }, [isSuccess]);

  return (
    <div className="mt-5">
      <div className="mb-5">
        <h2 className="text-xl font-semibold">User Profile</h2>
      </div>
      <div>
        <div className="contact--details flex items-center justify-between bg-blue-100/20 p-5 px-10">
          <div className="flex items-center gap-4">
            <img
              className="w-[120px] h-[120px] rounded-full"
              src={imageLoaded ? user?.user_photo : "/images/avatar.webp"}
              alt="profile photo"
              onError={handleImageError}
            />
            <div>
              <h4 className="font-semibold text-xl capitalize">{`${user?.firstname} ${user?.lastname}`}</h4>
              <h5>{user?.position}</h5>
            </div>
          </div>

          <div className="border-l-2 border-gray-200 pl-5">
            <h4 className="font-semibold mb-5">Contact Details</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <span className="font-semibold">Email:</span> {user?.email}
              </li>
              <li>
                <span className="font-semibold">Full Name:</span>{" "}
                {`${user?.firstname} ${user?.lastname}`}
              </li>
              <li>
                <span className="font-semibold">Phone Number:</span>{" "}
                {user?.phonenumber}
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="my-10 bg-blue-100/20 p-10">
          <h3 className="font-semibold mb-5">Update Profile</h3>
          <div>
            <form action="" className="grid grid-cols-3 gap-10">
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <label htmlFor="firstname">First Name</label>
                    <br />
                    <input
                      className="w-full mt-3 bg-white"
                      type="text"
                      name="firstname"
                      id="firstname"
                      onChange={handleInputChange}
                      value={userData.firstname}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname">Last Name</label>
                    <br />
                    <input
                      className="w-full mt-3 bg-white"
                      type="text"
                      name="lastname"
                      id="lastname"
                      onChange={handleInputChange}
                      value={userData.lastname}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <br />
                  <input
                    className="w-full mt-3 bg-white"
                    type="tel"
                    name="phonenumber"
                    id="phone"
                    onChange={handleInputChange}
                    value={userData.phonenumber}
                  />
                </div>
                <div>
                  <label htmlFor="location">Location</label>
                  <br />
                  <input
                    className="w-full mt-3 bg-white"
                    type="text"
                    name="location"
                    id="location"
                    onChange={handleInputChange}
                    value={userData.location}
                  />
                </div>
                <div>
                  <label htmlFor="school">School</label>
                  <br />
                  <input
                    className="w-full mt-3 bg-white"
                    type="text"
                    name="school"
                    id="school"
                    onChange={handleInputChange}
                    value={userData.school}
                  />
                </div>
              </div>
              <div className="border-dashed border-2 border-slate-400 p-10 flex flex-col items-center">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src={imageLoaded ? user?.user_photo : "/images/avatar.webp"}
                  alt="profile photo"
                  onError={handleImageError}
                />
                <input className="invisible" type="file" name="" id="photo" />
                <label htmlFor="photo" className="btn--primary cursor-pointer">
                  Change Photo
                </label>
              </div>
              <button className="btn--primary" type="submit">
                Update User
              </button>
            </form>
          </div>
        </div>
        <div className="my-10 bg-blue-100/20 p-10">
          <h3 className="font-semibold mb-5">Password Settings</h3>
          <form action="" onSubmit={handlePasswordSubmit}>
            <div>
              <label htmlFor="currentPassword">Current Password</label>
              <br />
              <input
                className="w-full mt-3 bg-white"
                type="password"
                name="currentPassword"
                id="currentPassword"
                onChange={handlePasswordChange}
                value={passwordData.currentPassword}
              />
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label htmlFor="password">New Password</label>
                <br />
                <input
                  className="w-full mt-3 bg-white"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handlePasswordChange}
                  value={passwordData.password}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <br />
                <input
                  className="w-full mt-3 bg-white"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handlePasswordChange}
                  value={passwordData.confirmPassword}
                />
              </div>
            </div>
            <button className="btn--primary mt-5" type="submit">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
