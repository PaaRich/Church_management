import { Outlet, Link } from "react-router-dom";
import BackBtn from "../../Reusable/BackBtn";
import { committee } from "./Committee";
import Person from "./Person";

const JPK = () => {
  return (
    <div className="flex">
      <div className="basis-1/2 border-r-2 pr-2 ">
        <BackBtn
          text="People"
          paddingAndMargin="mb-0 p-2"
          path={"/dashboard/people"}
        />
        <div className="mt-5">
          {committee.map((person) => (
            <Link to={person.lastName} key={person.dateJoined} state={person}>
              <Person person={person.lastName} />
            </Link>
          ))}
        </div>
      </div>
      <div className="basis-1/2">
        <Outlet />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default JPK;
