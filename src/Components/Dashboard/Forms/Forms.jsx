import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./style.css"

function Forms() {
  //Education level dropdown state variable
  const [levelFieldOpen, setLevelFieldOpen] = useState(false);
  const [level, setLevel] = useState("Highest Level of Education");
  //Marital level dropdown state variable
  const [maritalFieldOpen, setMaritalFieldOpen] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState("Marital Status");
  //media dropdown state variable
  const [mediaFieldOpen, setMediaFieldOpen] = useState(false);
  const [media, setMedia] = useState("How did you hear of us");
  //school dropdown state variable
  const [schoolFieldOpen, setSchoolFieldOpen] = useState(false);
  const [school, setSchool] = useState("school");

  //navigator
  const navigator = useNavigate();
  return (
    <div className="w-full">
      <div className="church_profile pb-5 relative">
        <div className="flex items-center justify-center flex-col">
          <img
            className="rounded-full w-10 h-10 bg-black"
            src="/images/avatar2.webp"
            alt="church_profile-pic"
          />
          <h2>Church Name</h2>
          <p className="font-light">Logo</p>
          <p className="pt-3">Church membership form</p>
        </div>
        <div
          className="c-form-navigator absolute p-2 top-0 left-0 flex items-center text-lg cursor-pointer"
          onClick={() => navigator(-1)}
        >
          <IoIosArrowBack size={23} />
          Form
        </div>
      </div>
      <form action="" className="form--section w-full h-full">
        <div className="flex gap-3">
          <div className="flex flex-col w-1/2">
            <input type="text" placeholder="Firstname" required />
            <input type="text" placeholder="Othername" />
            <div className="flex my-2">
              <label htmlFor="" className="mr-5">
                <input className="mr-2" type="radio" name="sex" id="Male" />
                Male
              </label>
              <label htmlFor="">
                <input className="mr-2" type="radio" name="sex" id="Female" />
                Female
              </label>
            </div>
            <input type="tel" placeholder="telephone" />
            <div className="relative">
              <div
                className={`${
                  levelFieldOpen && "border-t-2 border-x-2 border-black"
                } flex items-center justify-between cursor-pointer c-level-input-container pr-3`}
                onClick={() => {
                  setLevelFieldOpen(!levelFieldOpen);
                  setMaritalFieldOpen(false);
                  setMediaFieldOpen(false);
                  setSchoolFieldOpen(false);
                }}
              >
                <span className="m-2">{level}</span>
                {levelFieldOpen ? (
                  <IoIosArrowDown size={24} />
                ) : (
                  <IoIosArrowUp size={24} />
                )}
              </div>
              <div
                className={`${
                  levelFieldOpen ? "block" : "hidden"
                } absolute top-10 w-full z-50 bg-white c-level-popup-container border-b-2 border-x-2 p-1 rounded border-black`}
              >
                <div onClick={(e) => setLevel(e.target.innerText)}>
                  Post Graduate
                </div>
                <div onClick={(e) => setLevel(e.target.innerText)}>
                  Undergraduate
                </div>
                <div onClick={(e) => setLevel(e.target.innerText)}>
                  Senior High School
                </div>
                <div onClick={(e) => setLevel(e.target.innerText)}>
                  Junior High School
                </div>
              </div>
            </div>
            <input type="text" placeholder="Mustard Seed" required />
            <input type="text" placeholder="Ministry" required />
          </div>
          <div className="flex flex-col w-1/2 ">
            <input type="text" name="" id="" placeholder="Lastname" required />
            <input
              type="text"
              name=""
              id=""
              placeholder="Date of birth"
              required
            />
            <input type="text" name="" id="" placeholder="Location" required />
            <div className="relative">
              <div
                className={`${
                  maritalFieldOpen && "border-b-0 border-2 border-black"
                } flex items-center justify-between cursor-pointer c-level-input-container pr-3`}
                onClick={() => {
                  setLevelFieldOpen(false);
                  setMaritalFieldOpen(!maritalFieldOpen);
                  setMediaFieldOpen(false);
                  setSchoolFieldOpen(false);
                }}
              >
                <span className="m-2">{maritalStatus}</span>
                {maritalFieldOpen ? (
                  <IoIosArrowDown size={24} />
                ) : (
                  <IoIosArrowUp size={24} />
                )}
              </div>
              <div
                className={`${
                  maritalFieldOpen ? "block" : "hidden"
                } absolute top-10 w-full z-50 bg-white border-2 border-t-0 p-1 rounded border-black c-level-popup-container`}
              >
                <div onClick={(e) => setMaritalStatus(e.target.innerText)}>
                  Married
                </div>
                <div onClick={(e) => setMaritalStatus(e.target.innerText)}>
                  Divorce
                </div>
                <div onClick={(e) => setMaritalStatus(e.target.innerText)}>
                  Single
                </div>
              </div>
            </div>
            <input type="email" name="" id="" placeholder="Email" />
            <div className="relative">
              <div
                className={`${
                  mediaFieldOpen && "border-2 border-t-0 border-black"
                } flex items-center justify-between cursor-pointer c-level-input-container pr-3`}
                onClick={() => {
                  setLevelFieldOpen(false);
                  setMaritalFieldOpen(false);
                  setMediaFieldOpen(!mediaFieldOpen);
                  setSchoolFieldOpen(false);
                }}
              >
                <span className="m-2">{media}</span>
                {mediaFieldOpen ? (
                  <IoIosArrowDown size={24} />
                ) : (
                  <IoIosArrowUp size={24} />
                )}
              </div>
              <div
                className={`${
                  mediaFieldOpen ? "block" : "hidden"
                } absolute -top-40 w-full z-50 bg-white border-2 border-b-0 p-1 pb-0 rounded border-black c-level-popup-container`}
              >
                <div onClick={(e) => setMedia(e.target.innerText)}>
                  COSMOPOLITAN
                </div>
                <div onClick={(e) => setMedia(e.target.innerText)}>
                  Social Media
                </div>
                <div onClick={(e) => setMedia(e.target.innerText)}>Invited</div>
                <div onClick={(e) => setMedia(e.target.innerText)}>Others</div>
              </div>
            </div>
            <div className="relative">
              <div
                className={`${
                  schoolFieldOpen && "border-2 border-t-0 border-black"
                } flex items-center justify-between cursor-pointer c-level-input-container pr-3`}
                onClick={() => {
                  setLevelFieldOpen(false);
                  setMaritalFieldOpen(false);
                  setMediaFieldOpen(false);
                  setSchoolFieldOpen(!schoolFieldOpen);
                }}
              >
                <span className="m-2">{school}</span>
                {schoolFieldOpen ? (
                  <IoIosArrowDown size={24} />
                ) : (
                  <IoIosArrowUp size={24} />
                )}
              </div>
              <div
                className={`${
                  schoolFieldOpen ? "block" : "hidden"
                } absolute  -top-56 w-full z-50 bg-white border-2 border-b-0 p-1 rounded border-black c-level-popup-container`}
              >
                <div onClick={(e) => setSchool(e.target.innerText)}>UENR</div>
                <div onClick={(e) => setSchool(e.target.innerText)}>STU</div>
                <div onClick={(e) => setSchool(e.target.innerText)}>SUSEC</div>
                <div onClick={(e) => setSchool(e.target.innerText)}>SNMTC</div>
                <div onClick={(e) => setSchool(e.target.innerText)}>NODASS</div>
                <div onClick={(e) => setSchool(e.target.innerText)}>SDA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative pb-5">
          <button
            className="btn rounded-md text-white px-3 py-4 bg-slate-900 ho w-96"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
