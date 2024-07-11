//import React from 'react'
import { useParams } from "react-router-dom";
import BackBtn from "../../Reusable/BackBtn";
import Person from "../People/Person";
import { committee } from "../People/Committee";

const Ministry = () => {
  const { id } = useParams();
  return (
    <div className="flex">
      <div className="w-1/2 border-r-2 border-r-slate-300">
        <span className="flex items-center">
          <BackBtn text="Ministries" paddingAndMargin="p-2 mb-1" />
          <p className="text-xl font-medium ml-10">{id}</p>
        </span>
        <span>
          <p className="ml-4 text-xl mb-1">President</p>
          <Person person="Jane Smith" position="President" />
        </span>
        <div>
          <p className="ml-4 text-xl my-2">Members</p>
          <div>
            {committee.map(
              (person, index) =>
                index < 4 && (
                  <Person
                    key={index}
                    person={person.person}
                    position={person.position}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2">seie</div>
    </div>
  );
};

export default Ministry;
