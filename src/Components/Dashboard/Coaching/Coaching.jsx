//import React from "react";
import BackBtn from "../../Reusable/BackBtn";
import Person from "../People/Person";
import { committee } from "../People/Committee";
import { Link } from "react-router-dom";

function Coaching() {
  return (
    <div>
      <BackBtn text="Foundational School" paddingAndMargin="mb-2 p-3" />
      <div>
        <p className="font-semibold">Log Complain</p>
        <form className="flex items-center mt-4">
          <input
            className="mb-0 w-1/3 mr-10 pl-3"
            type="text"
            placeholder="Person's name"
          />
          <input
            className="mb-0 w-1/3 mr-10 pl-3"
            type="text"
            placeholder="Complain Type"
          />
          <button
            className="bg-blue-500 py-2 px-6 text-white rounded-sm "
            type="submit"
          >
            Log
          </button>
        </form>
        <div className="mt-5 flex">
          <div className="w-1/2 border-r-2 pr-2">
            <p className="font-semibold">Complains</p>
            <div className="flex items-center justify-between">
              <p className="text-xl">General Complains</p>
              <button className="px-3 py-2 rounded-sm bg-green-500 text-white hover:bg-green-400">
                Assign All
              </button>
            </div>
            <div className="mt-1">
              {committee.map(
                (item, index) =>
                  index < 4 && (
                    <Person
                      key={item.name}
                      person={item.person}
                      position={item.position}
                    />
                  )
              )}
            </div>
          </div>
          <div className="w-1/2">
            <p className="pt-8 pb-1 text-xl">Specific Complains</p>
            <div className="mt-1">
              {committee.map(
                (item, index) =>
                  index < 4 && (
                    <Link
                      key={item.name}
                      to="/dashboard/coaching/specific_complains"
                    >
                      <Person
                        person={item.person}
                        position={item.position}
                        mustard_seed={item.mustard_seed}
                      />
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaching;
