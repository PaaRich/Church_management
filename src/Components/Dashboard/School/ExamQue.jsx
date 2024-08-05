import { useNavigate } from "react-router-dom";
const ExamQue = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-between h-full pt-5">
        <div className="mb-20">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            nemo iste mollitia incidunt accusantium nesciunt, odio obcaecati
            vero dignissimos. Voluptas eum doloribus magni nihil deleniti natus
            nesciunt! Consectetur, cumque deserunt.
          </p>
          <ul className="mt-10">
            <li>Option 1</li>
            <li className="my-3">Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <button className="px-10 py-2 border-2 rounded-lg hover:bg-blue-400 hover:text-white duration-500">
            Prev
          </button>
          <button
            onClick={() => navigate("cert")}
            className="bg-blue-500 text-white py-2 px-10 rounded-lg hover:bg-blue-400 duration-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamQue;
