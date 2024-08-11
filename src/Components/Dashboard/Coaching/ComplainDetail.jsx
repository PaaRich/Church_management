import { useParams, useLocation } from "react-router-dom";

const ComplainDetail = () => {
  const location = useLocation();
  const complainData = location.state;

  const { contact } = useParams();

  return (
    <div>
      <h1 className="font-semibold text-3xl">Description</h1>
      <div>
        <h4 className="font-semibold text-lg mt-5">{contact}</h4>
        <p className="text-lg leading-7 pb-2 w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum
          earum facilis exercitationem quibusdam doloremque, id molestiae illum
          explicabo, harum consequuntur doloribus. Hic reiciendis odit eius
          minima neque ipsa rem soluta facere ullam quae similique, rerum animi
          amet! Reiciendis fuga accusamus veniam perspiciatis quasi et sequi
          corrupti laudantium, doloribus ipsum.
        </p>
        <div className="border-2 border-blue-500 my-5 p-5 rounded-md">
          <div className="flex items-center">
            <div className="text-lg font-semibold mr-10">
              Phone Number:{"  "}
              <span className="underline font-light">
                {complainData.contact}
              </span>
            </div>
            <div className="text-lg font-semibold">
              Complain type:{"  "}
              <span className="underline font-light">{complainData.type}</span>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <div className="text-lg font-semibold">
              Date created:{"  "}
              <span className="underline font-light">{complainData.date}</span>
            </div>
            <div></div>
          </div>
        </div>
        <select name="coach" id="" className="bg-slate-200">
          <option value="Assign Coach" disabled selected>
            Assign Coach
          </option>
          <option value="Coach 1">Coach 1</option>
          <option value="Coach 2">Coach 2</option>
          <option value="Coach 3">Coach 3</option>
        </select>
      </div>
    </div>
  );
};

export default ComplainDetail;
