/* eslint-disable react/prop-types */
//import React from "react";
import Person from "./Person";
//import Profile from "./Profile";
import { committee } from "./Committee";
import BackBtn from "../../Reusable/BackBtn";
import { Link } from "react-router-dom";

function People({ children }) {
  return (
    <div className="p-0">
      <div className="c-people-header flex">
        <BackBtn text="People" paddingAndMargin="mb-5 p-2" path={'/dashboard'} />
        <div className="w-1/2">
          <div></div>
        </div>
      </div>
      <div className="flex h-full">
        <div className="w-1/2 h-full pr-4 border-r-2 ">
          {committee.map((person) => (
            <Link
              key={person.person}
              state={person}
              to={`/dashboard/people/${person.person}`}
            >
              <Person
                person={person.person}
                position={person.position}
                mustard_seed={person.mustard_seed}
              />
            </Link>
          ))}
        </div>
        <div className="w-1/2 h-full pr-4 pt-4 pl-4">{children}</div>
      </div>
    </div>
  );
}

export default People;
