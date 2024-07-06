//import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Person from "./Person";
import Profile from "./Profile";
import { committee } from "./Committee";
import { useNavigate } from "react-router-dom";

function People() {
  const navigate = useNavigate();
  return (
    <div className="p-0">
      <div className="c-people-header flex">
        <div className="w-1/2 border-r-2" onClick={() => navigate(-1)}>
          <button className="flex items-center text-lg p-2">
            <IoIosArrowBack size={23} />
            People
          </button>
        </div>
        <div className="w-1/2">
          <div></div>
        </div>
      </div>
      <div className="flex h-full">
        <div className="w-1/2 h-full pr-4 border-r-2 ">
          {committee.map((person) => (
            <Person
              key={person.person}
              person={person.person}
              position={person.position}
              mustard_seed={person.mustard_seed}
            />
          ))}
        </div>
        <div className="w-1/2 h-full pr-4 pt-4 pl-4">
          <Profile
            firstName="Richmond"
            lastName="David"
            dateJoined="15th July 2000"
            maritalStatus="Single"
            position="User"
          />
        </div>
      </div>
    </div>
  );
}

export default People;
