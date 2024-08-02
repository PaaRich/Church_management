import cert from "../../../assets/certificate.jpg";
const Cert = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-8">
        <h1 className="text-center text-2xl mb-3">
          Congratulations you have completed Course
        </h1>
        <img className="w-5/6 mx-auto" src={cert} alt="cert" />
      </div>
      <button className="text-white px-10 py-3 rounded-lg bg-blue-500">
        Download
      </button>
    </div>
  );
};

export default Cert;
