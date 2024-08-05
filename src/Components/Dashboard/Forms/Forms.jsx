import { useEffect, useState } from "react";
import BackBtn from "../../Reusable/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../Redux/features/auth/authSlice";
import Loader from "../../Reusable/Loader";

function Forms() {
  const dispatch = useDispatch();

  const {isLoading } = useSelector(
    (state) => state.auth
  );

  const [userData, setUserData] = useState({
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
  });

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
  const handleSubmit = async(e) => {
    e.preventDefault();

    await dispatch(addUser(userData))
    // console.log(userData);
  };

  // useEffect(()=>{
  //   if(isLoading )
  // },[])

  return (
    <>
      {isLoading && <Loader/>}
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
      <form action="" className=" w-full h-full" onSubmit={handleSubmit}>
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
            <label htmlFor="" className="mr-5">
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
            <label htmlFor="">
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
            placeholder="telephone"
            onChange={handleChange}
            value={userData.phonenumber}
            name="phonenumber"
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
          <input
            type="text"
            name="mustard_seed"
            onChange={handleChange}
            value={userData.mustard_seed}
            placeholder="Mustard Seed"
          />
          <input
            type="text"
            name="ministry"
            onChange={handleChange}
            value={userData.ministry}
            placeholder="Ministry"
          />

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
            <div className="my-8">
              <label
                className="pb-3 bg-blue-500 text-white p-5 rounded-md cursor-pointer"
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
