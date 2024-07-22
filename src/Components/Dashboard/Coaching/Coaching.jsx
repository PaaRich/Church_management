//import React from "react";
import BackBtn from "../../Reusable/BackBtn";
import Person from "../People/Person";
import { committee } from "../People/Committee";
import { Link } from "react-router-dom";

function Coaching() {
  return (
    <div className="px-5">
      <BackBtn text="Foundational School" paddingAndMargin="mb-2 p-2" path={'/dashboard/ministries'} />
      <div>
        <p className="font-semibold text-2xl">Log Complain</p>
        <form className=" mt-5">
          <div className="grid grid-cols-2 gap-10">
          <div>
          <input
            className="mb-0 w-full mr-10 pl-3"
            type="text"
            placeholder="Person's name"
            />
            </div>
            <div>
          <input
            className="mb-0 w-full mr-10 pl-3"
            type="text"
            placeholder="Complain Type"
            />
            </div>
            <div className="col-span-2">
              <textarea className="p-5 border-2 border-slate-200/80 w-full  resize-none" name="complain" id="" cols="30" rows="7" placeholder="Enter Complain"></textarea>
            </div>
            </div>
          <button
            className="bg-blue-500 py-3 px-6 w-1/5 mt-4 text-white rounded-sm hover:bg-blue-400 duration-200"
            type="submit"
          >
            Log
          </button>
        </form>
        <div className="mt-5 flex">
          <div className="w-1/2 border-r-2 pr-2">
            <p className="font-semibold">Complains</p>
            <div className="flex items-center justify-between">
              <p className="text-xl">General Coaches</p>
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
            <p className="pt-8 pb-1 text-xl pl-4">Specific Coaches</p>
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
