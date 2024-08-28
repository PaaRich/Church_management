import React, { useEffect, useState } from "react";
import BackBtn from "../../Reusable/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { addUser, RESET } from "../../../Redux/features/auth/authSlice";
import Loader from "../../Reusable/Loader";
import { getMinistries } from "../../../Redux/features/ministry/ministrySlice";
import { getMustards } from "../../../Redux/features/mustard/mustardSlice";
import { toast } from "react-toastify";

function Forms() {
  const dispatch = useDispatch();
  const { ministryLoading, allMinistries } = useSelector(
    (state) => state.ministry
  );
  const { mustardLoading, allMustards } = useSelector((state) => state.mustard);
  const { isSuccess,isLoading } = useSelector((state) => state.auth);

  const initialStates = {
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
    position: "",
  };
  const [ministries, setMinistries] = useState(allMinistries);
  const [mustards, setMustards] = useState(allMustards);
  const [userData, setUserData] = useState(initialStates);

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
    let formattedNumber;
    e.preventDefault();
    if (!userData.phonenumber.match(/^\d{9}$|^\d{10}$/)) {
      return toast.error("provide a valid phone number");
    }
    if (userData.phonenumber.startsWith("0")) {
      const number = userData.phonenumber.slice(1);
      formattedNumber = `233${number}`;
      // console.log(userData.phonenumber)
    }else if(!userData.phonenumber.startsWith("0")){
      formattedNumber=`233${userData.phonenumber}`
    }

    const formData= new FormData()
    formData.append("firstname",userData.firstname)
    formData.append("lastname",userData.lastname)
    formData.append("othername",userData.othername)
    formData.append("gender",userData.gender)
    formData.append("user_photo",userData.user_photo)
    formData.append("phonenumber",formattedNumber)
    formData.append("education_level",userData.education_level)
    formData.append("mustard_seed",userData.mustard_seed)
    formData.append("ministry",userData.ministry)
    formData.append("DOB",userData.DOB)
    formData.append("location",userData.location)
    formData.append("marital_status",userData.marital_status)
    formData.append("email",userData.email)
    formData.append("media",userData.media)
    formData.append("school",userData.school)
    formData.append("invited_by",userData.invited_by)
    formData.append("position",userData.position)

    // console.log(Array.from(formData))
    await dispatch(addUser(formData));
    // console.log(userData);
  };

  useEffect(() => {
    if (isSuccess) {
      setUserData(initialStates);
    }
    dispatch(RESET());
  }, [isSuccess]);

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

  return (
    <>
      {isLoading && <Loader />}
      {ministryLoading && <Loader />}
      <div className="w-full">
        <div className="church_profile pb-1 relative">
          <div className="flex items-center justify-center flex-col">
            <img
              className="rounded-full w-10 h-10 bg-black"
              src="/images/avatar2.webp"
              alt="church_profile-pic"
            />
            <h2 className="text-xl">Church Name</h2>
            <p className="font-light">Logo</p>
            <p className="pt-1">Church membership form</p>
          </div>
          <BackBtn
            text="Form"
            paddingAndMargin="mb-0 p-2"
            path={"/dashboard/people"}
          />
        </div>
        <form action="" className=" w-full h-full mt-5" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-2 gap-x-5">
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
            <input
              type="tel"
              placeholder="telephone  eg: 0242424444"
              onChange={handleChange}
              value={userData.phonenumber}
              name="phonenumber"
              maxLength={10}
            />
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

            <input
              type="text"
              name="lastname"
              id=""
              onChange={handleChange}
              value={userData.lastname}
              placeholder="Lastname"
            />
            <input
              type="date"
              name="DOB"
              onChange={handleChange}
              value={userData.DOB}
              id=""
              placeholder="Date of birth"
            />
            <input
              type="text"
              name="location"
              id=""
              onChange={handleChange}
              value={userData.location}
              placeholder="Location"
            />
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
            />
            <div className="relative">
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
              <select
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
                <option value="Workforce">WorkForce</option>
                <option value="Ministry_President">Ministry President</option>
                <option value="District_Pastor">District Pastor</option>
              </select>
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
              <div className="mt-3">
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
          <div className="w-full relative pb-5 mt-2">
            <button
              className="btn w-80 rounded-md text-white px-3 py-4 bg-slate-900 absolute left-1/2 -translate-x-1/2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Forms;
