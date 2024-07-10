//import React from 'react'
import BackBtn from "../../Reusable/BackBtn";
import { committee } from "../People/Committee";
import Person from "../People/Person";
const SpecificComplain = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="flex items-center justify-between pr-3 mb-6">
          <BackBtn text="Coaching" paddingAndMargin="p-3 mb-0" />
          <p className="text-xl">Special Complain</p>
        </div>
        <Person
          person="Janet Smith"
          position="Specific"
          mustard_seed="Physics"
        />
        <form action="" className="flex flex-col w-5/6 mx-auto mt-5">
          <label htmlFor="">
            To Assign
            <input
              className="w-full mx-auto py-3 my-5 px-2"
              type="text"
              placeholder="Experts name"
            />
          </label>
          <button
            type="submit"
            className="w-3/6 bg-green-500 mx-auto p-3 text-white hover:bg-green-400 duration-300"
          >
            Assign
          </button>
        </form>
      </div>
      <div className="w-1/2 border-l-2">
        <div className=" p-3 mb-6 font-semibold italic">
          <p className="text-xl">Experts</p>
        </div>
        {/* people */}
        <div>
          {committee.map((item) => (
            <Person
              key={item.person}
              person={item.person}
              position="Expert"
              mustard_seed="Physics"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificComplain;
