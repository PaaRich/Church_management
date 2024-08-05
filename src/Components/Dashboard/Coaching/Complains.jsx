import Person from "../People/Person";
import { committee } from "../People/Committee";
import { Link } from "react-router-dom";
const Complains = () => {
  return (
    <div>
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
  );
};

export default Complains;
