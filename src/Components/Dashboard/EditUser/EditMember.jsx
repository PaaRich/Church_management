import React, { useEffect, useState } from "react";
import BackBtn from "../../Reusable/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  registerCoach,
  updateUser,
} from "../../../Redux/features/auth/authSlice";
import Loader from "../../Reusable/Loader";
import { getMinistries } from "../../../Redux/features/ministry/ministrySlice";
import { getMustards } from "../../../Redux/features/mustard/mustardSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditMember() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { ministryLoading, allMinistries } = useSelector(
    (state) => state.ministry
  );
  const { mustardLoading, allMustards } = useSelector((state) => state.mustard);
  const { isLoading, user } = useSelector((state) => state.auth);

  const initials = {
    firstname: "",
    lastname: "",
    othername: "",
    gender: "",
    user_photo: "",
    phonenumber: "",
    education_level: "",
    mustard_seed: "",
    ministry: "",
    DOB: "",
    location: "",
    marital_status: "",
    email: "",
    media: "",
    school: "",
    invited_by: "",
    role: "",
  };
  const [ministries, setMinistries] = useState(allMinistries);
  const [mustards, setMustards] = useState(allMustards);
  const [userInfo, setUserInfo] = useState(user);
  const [userData, setUserData] = useState(initials);
  const [coach, setCoach] = useState("");

  // console.log(user?.DOB==undefined)
  const getUserInfo = async () => {
    await dispatch(getUser(id));
  };
  useEffect(() => {
    getUserInfo();
    setUserInfo(user);
    let formattedDate;
    if (!(user?.DOB == undefined)) {
      const date = new Date(user?.DOB);
      formattedDate = date.toISOString().split("T")[0];
    }
    setUserData((prev) => ({
      ...prev,
      firstname: user?.firstname,
      lastname: user?.lastname,
      othername: user?.othername,
      gender: user?.gender,
      user_photo: user?.user_photo,
      phonenumber: user?.phonenumber,
      education_level: user?.education_level,
      mustard_seed: user?.mustard_seed,
      ministry: user?.ministry,
      DOB: formattedDate ?? "",
      location: user?.location,
      marital_status: user?.marital_status,
      email: user?.email,
      media: user?.media,
      school: user?.school,
      invited_by: user?.invited_by,
      role: user?.role,
    }));
  }, []);
  useEffect(() => {
    setUserInfo(user);
    let formattedDate;
    if (!(user?.DOB == undefined)) {
      const date = new Date(user?.DOB);
      formattedDate = date.toISOString().split("T")[0];
    }
    setUserData((prev) => ({
      ...prev,
      firstname: user?.firstname,
      lastname: user?.lastname,
      othername: user?.othername,
      gender: user?.gender,
      user_photo: user?.user_photo,
      phonenumber: user?.phonenumber,
      education_level: user?.education_level,
      mustard_seed: user?.mustard_seed,
      ministry: user?.ministry,
      DOB: formattedDate ?? "",
      location: user?.location,
      marital_status: user?.marital_status,
      email: user?.email,
      media: user?.media,
      school: user?.school,
      invited_by: user?.invited_by,
      role: user?.role,
    }));
  }, [user]);

  const handleChange = (e) => {
    setUserData((prev) =>
      e.target.type === "file"
        ? {
            ...prev,
            [e.target.name]: e.target.files[0],
          }
        : {
            ...prev,
            [e.target.name]: e.target.value,
          }
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (
      !userData.gender ||
      !userData.firstname ||
      !userData.lastname ||
      !userData.location ||
      !userData.media ||
      !userData.DOB
    ) {
      return toast.error("please fill out all required fields");
    }
    const selectedDate = new Date(userData.DOB);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      return toast.error("DOB cannot be greater than today's date");
    }
    await dispatch(updateUser({ userData, userId: id }));
    // setUserData(initials);
    // console.log(userData);
  };

  const getAllMinistries = async function () {
    await dispatch(getMinistries());
  };

  const getAllMustards = async function () {
    await dispatch(getMustards());
  };
  useEffect(() => {
    getAllMinistries();
    setMinistries(allMinistries);
  }, []);
  useEffect(() => {
    setMinistries(allMinistries);
  }, [allMinistries]);

  useEffect(() => {
    getAllMustards();
    setMustards(allMustards);
  }, []);
  useEffect(() => {
    setMustards(allMustards);
  }, [allMustards]);

  const submitCoach = async (e) => {
    e.preventDefault();
    if (!coach) {
      return toast.error("please select a coach type");
    }
    await dispatch(registerCoach({ userId: id, coach_type: coach }));
    // console.log(coach)
  };

  return (
    <>
      {isLoading && <Loader />}
      {ministryLoading && <Loader />}
      <div className="w-full">
        <BackBtn
          text="Form"
          paddingAndMargin="mb-0 p-2"
          path={"/dashboard/people"}
        />
        <div className="church_profile pb-1 relative">
          <div className="flex items-center justify-center flex-col mt-5">
            <h2 className="text-xl">Edit Member Information</h2>
            <p className="pt-1">Church membership form</p>
          </div>
        </div>
        <form
          action=""
          className=" w-full h-full mt-5 pb-20"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-x-5 max-md:grid-cols-1">
            <label htmlFor="" className="font-semibold capitalize">
              First Name <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Firstname"
              onChange={handleChange}
              value={userData.firstname}
              name="firstname"
            />
            <input
              type="text"
              placeholder="Othername"
              onChange={handleChange}
              value={userData.othername}
              name="othername"
            />
            <label htmlFor="" className="font-semibold capitalize">
              Select Gender <span className="text-red-500">*</span>
            </label>
            <br />
            <div className="flex my-2">
              <label htmlFor="Male" className="mr-5">
                <input
                  className="mr-2"
                  type="radio"
                  onChange={handleChange}
                  checked={userData.gender === "male"}
                  value="male"
                  name="gender"
                  id="Male"
                />
                Male
              </label>
              <label htmlFor="Female">
                <input
                  className="mr-2"
                  type="radio"
                  onChange={handleChange}
                  checked={userData.gender === "female"}
                  value="female"
                  name="gender"
                  id="Female"
                />
                Female
              </label>
            </div>
            <div>
              <label htmlFor="" className="font-semibold capitalize">
                User Phone Number <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="tel"
                placeholder="telephone"
                onChange={handleChange}
                value={userData.phonenumber}
                name="phonenumber"
                disabled={true}
                className="w-full"
              />
            </div>
            <div className="relative">
              <select
                className="py-3 px-5 w-full bg-slate-200/80"
                name="education_level"
                onChange={handleChange}
                value={userData.education_level}
                id=""
              >
                <option value="">Highest Level of Education</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Senior High School">Senior High School</option>
                <option value="Junior High School">Junior High School</option>
              </select>
            </div>
            {/* <input
            type="text"
            name="mustard_seed"
            onChange={handleChange}
            value={userData.mustard_seed}
            placeholder="Mustard Seed"
          /> */}
            <div className="relative">
              <select
                className="py-3 px-5 w-full bg-slate-200/80"
                name="mustard_seed"
                onChange={handleChange}
                value={userData.mustard_seed}
                id=""
              >
                <option value="">Select Mustard Seed</option>
                {allMustards?.map((mustard) => (
                  <React.Fragment key={mustard._id}>
                    <option value={mustard?.mustard}>{mustard?.mustard}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>
            {/* <input
            type="text"
            name="ministry"
            onChange={handleChange}
            value={userData.ministry}
            placeholder="Ministry"
          /> */}
            <div className="relative">
              <select
                className="py-3 px-5 w-full bg-slate-200/80"
                name="ministry"
                onChange={handleChange}
                value={userData.ministry}
                id=""
              >
                <option value="">Select Ministry</option>
                {allMinistries?.map((ministry) => (
                  <React.Fragment key={ministry?._id}>
                    <option value={ministry?.ministry}>
                      {ministry?.ministry}
                    </option>
                  </React.Fragment>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="" className="font-semibold capitalize">
                Last Name <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                name="lastname"
                id=""
                onChange={handleChange}
                value={userData.lastname}
                placeholder="Lastname"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold capitalize">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="date"
                name="DOB"
                onChange={handleChange}
                value={userData.DOB}
                id=""
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold capitalize">
                Location <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                name="location"
                id=""
                onChange={handleChange}
                value={userData.location}
                placeholder="Location"
                className="w-full"
              />
            </div>
            <div className="relative">
              <select
                className="py-3 px-5 w-full bg-slate-200/80"
                name="marital_status"
                onChange={handleChange}
                value={userData.marital_status}
                id=""
              >
                <option value="">Marital Status</option>
                <option value="Married">Married</option>
                <option value="Divorce">Divorce</option>
                <option value="Single">Single</option>
              </select>
            </div>
            <input
              type="email"
              name="email"
              id=""
              onChange={handleChange}
              value={userData.email}
              placeholder="Email"
              disabled={true}
            />
            <div className="relative">
              <label htmlFor="" className="font-semibold capitalize">
                How You Heard of Us <span className="text-red-500">*</span>
              </label>
              <br />
              <select
                className="py-3 px-5 w-full bg-slate-200/80"
                name="media"
                id=""
                onChange={handleChange}
                value={userData.media}
              >
                <option value="">How did you hear of us</option>
                <option value="COSMOPOLITAN TV">COSMOPOLITAN TV</option>
                <option value="Social Media">Social Media</option>
                <option value="Invited by someone">Invited by someone</option>
                <option value="others">others</option>
              </select>
              {userData.media === "Invited by someone" && (
                <input
                  className="w-full"
                  type="text"
                  name="invited_by"
                  onChange={handleChange}
                  id=""
                  placeholder="Invited By"
                />
              )}
              {/* <select
                name="position"
                onChange={handleChange}
                value={userData.position}
                id=""
                className="w-full bg-slate-200"
              >
                <option value="Member">Member</option>
                <option value="Mustard_seed_President">
                  Mustard Seed President
                </option>
                <option value="Workforcers">WorkForcers</option>
                <option value="Ministry_President">Ministry President</option>
                <option value="District_Pastor">District Pastor</option>
              </select> */}
            </div>
            <div className="relative">
              <select
                className="py-3 px-5 w-full bg-slate-200/80"
                name="school"
                onChange={handleChange}
                value={userData.school}
                id=""
              >
                <option value="">School</option>
                <option value="UENR">UENR</option>
                <option value="STU">STU</option>
                <option value="SUSEC">SUSEC</option>
                <option value="SNMTC">SNMTC</option>
                <option value="NODASS">NODASS</option>
                <option value="SDA">SDA</option>
              </select>
              <div>
                <select
                  name="role"
                  onChange={handleChange}
                  value={userData.role}
                  id=""
                  className="w-full"
                >
                  <option value="">-- Change User Role --</option>
                  <option value="member">Member</option>
                  <option value="pastor">Pastor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="mt-3">
                <p htmlFor="" className="font-semibold capitalize">
                  Upload a User photo <span className="text-red-500">*</span>
                </p>
                <br />
                <label
                  className="p-3 py-4 hover:bg-blue-400 duration-500 bg-blue-500 text-white rounded-md cursor-pointer"
                  htmlFor="userPhoto"
                >
                  Upload Photo
                </label>
                <input
                  className="hidden"
                  onChange={handleChange}
                  file={userData.user_photo}
                  type="file"
                  name="user_photo"
                  id="userPhoto"
                />
              </div>
            </div>
          </div>
          <div className="w-full relative pb-5 mt-10">
            <button
              className="btn w-80 rounded-md text-white px-3 py-4 bg-slate-900 absolute left-1/2 -translate-x-1/2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <hr />
        <div className="mt-10 pb-32">
          <div className="flex items-center justify-center flex-col mt-5">
            <h2 className="text-xl font-semibold">Other Settings</h2>
            <p className="pt-1">Assign a member as Coach</p>
          </div>
          <form
            action=""
            className="mt-5 flex max-md:flex-col items-center gap-10 w-3/6 justify-between max-md:w-full max-sm:gap-5"
            onSubmit={submitCoach}
          >
            <div>
              {/* <label htmlFor="" className="text-xl">Select Coach Type</label> <br /> */}
              <select
                name="coach_type"
                className=" mt-5 md:w-96 max-sm:w-full"
                id=""
                value={coach}
                onChange={(e) => {
                  setCoach(e.target.value);
                }}
              >
                <option value="">Select Coach Type</option>
                <option value="general">General Coach</option>
                <option value="specific">Specific Coach</option>
              </select>
            </div>
            <button
              type="submit"
              className="py-3 px-8 bg-blue-500 rounded-sm shadow-lg text-white"
            >
              Assign
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditMember;
