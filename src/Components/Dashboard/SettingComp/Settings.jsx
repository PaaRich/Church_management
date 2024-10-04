import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import Modal from "../../Reusable/Modal";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  createMinistry,
  deleteMinistry,
  getMinistries,
  RESET_MINISTRY_STATES,
} from "../../../Redux/features/ministry/ministrySlice";
import {
  createMustard,
  deleteMustard,
  getMustards,
  RESET_MUSTARD_STATES,
} from "../../../Redux/features/mustard/mustardSlice";
import Loader from "../../Reusable/Loader";
import Confirm from "../../Reusable/Confirm";
import { findUser, RESET } from "../../../Redux/features/auth/authSlice";
import Lessons from "./Lessons";

const Settings = () => {
  const dispatch = useDispatch();
  const { ministryLoading, ministrySuccess, allMinistries } = useSelector(
    (state) => state.ministry
  );

  const { mustardLoading, mustardSuccess, allMustards } = useSelector(
    (state) => state.mustard
  );

  const { isLoading, isSuccess, user } = useSelector((state) => state.auth);

  const [state, setState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteMustardModal, setShowDeleteMustardModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [fileDeleted, setFileDeleted] = useState(false);
  const [ministryData, setMinistryData] = useState("");
  const [mustardData, setMustardData] = useState("");

  const [allMinistriesData, setAllMinistriesData] = useState(allMinistries);
  const [allMustardsData, setAllMustardsData] = useState(allMustards);

  const getAllMinistries = async function () {
    await dispatch(getMinistries());
  };
  const getAllMustards = async function () {
    await dispatch(getMustards());
  };

  const deleteItem = async function () {
    setFileDeleted(false);
    await dispatch(deleteMinistry(deleteId));
  };

  const deleteMustardItem = async function () {
    setFileDeleted(false);
    await dispatch(deleteMustard(deleteId));
  };
  useEffect(() => {
    getAllMinistries();
    getAllMustards();
    setAllMinistriesData(allMinistries);
    setAllMustardsData(allMustards);
  }, [fileDeleted]);

  useEffect(() => {
    setAllMinistriesData(allMinistries);
  }, [allMinistries]);

  useEffect(() => {
    setAllMustardsData(allMustards);
  }, [allMustards]);

  const handleCreateMinistry = async function (e) {
    e.preventDefault();
    if (!ministryData) {
      return toast.error("ministry title not provided");
    }
    await dispatch(createMinistry({ ministry: ministryData.toLowerCase() }));
    setAllMinistriesData((prev) => [
      ...prev,
      { ministry: ministryData.toLowerCase() },
    ]);
    // console.log(ministryData);
  };
  useEffect(() => {
    if (ministrySuccess) {
      setMinistryData("");
      setIsOpen(false);
    }
    dispatch(RESET_MINISTRY_STATES());
  }, [ministrySuccess]);

  useEffect(() => {
    if (mustardSuccess) {
      setMustardData("");
      setIsModalOpen(false);
    }
    dispatch(RESET_MUSTARD_STATES());
  }, [mustardSuccess]);

  const handleCreateMustard = async function (e) {
    e.preventDefault();
    if (!mustardData) {
      return toast.error("mustard title not provided");
    }
    await dispatch(createMustard({ mustard: mustardData.toLowerCase() }));
    setAllMustardsData((prev) => [...prev, { mustard: mustardData }]);
    // console.log(mustardData);
  };

  const [tel, setTel] = useState("");
  const [searchedUser, setSearchedUser] = useState(user);

  useEffect(() => {
    setState(false);
  }, []);
  const searchUser = async function (e) {
    let phonenumber;
    e.preventDefault();
    if (!tel.match(/^\d{9}$|^\d{10}$/)) {
      setState(false);
      return toast.error("provide a valid phone number");
    }
    if (tel.startsWith("0")) {
      const formattedNumber = tel.slice(1);
      phonenumber = `233${formattedNumber}`;
    } else if (!tel.startsWith("0")) {
      phonenumber = `233${tel}`;
    }
    // setState(true);
    await dispatch(findUser({ number: phonenumber }));
    // setTel("");
  };
  useEffect(() => {
    setSearchedUser(user);
    // console.log(searchedUser)
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      setState(true);
    }
    dispatch(RESET());
  }, [isSuccess]);

  return (
    <>
      {ministryLoading && <Loader />}
      {mustardLoading && <Loader />}
      {isLoading && <Loader />}
      {/* delete modal */}
      {showDeleteModal ? (
        <Confirm
          setShowDeleteModal={setShowDeleteModal}
          onDelete={deleteItem}
          setFileDeleted={setFileDeleted}
        />
      ) : null}
      {showDeleteMustardModal ? (
        <Confirm
          setShowDeleteModal={setShowDeleteMustardModal}
          onDelete={deleteMustardItem}
          setFileDeleted={setFileDeleted}
        />
      ) : null}
      {/* delete modal */}
      <div className="mt-3">
        <div className="pb-14">
          <h1 className="text-2xl font-semibold">Member Information</h1>
          <form className="mt-5" onSubmit={searchUser}>
            <input
              className="mr-5 w-[40%] max-md:w-[60%] max-sm:w-full"
              type="tel"
              name="tel"
              value={tel}
              maxLength={10}
              onChange={(e) => {
                setTel(e.target.value);
              }}
              placeholder="Search Phone Number"
            />
            <button
              type="submit"
              className=" bg-blue-600 cursor-pointer shadow-lg text-white p-3 px-8 rounded-sm hover:bg-blue-500 duration-300"
            >
              Search
            </button>
          </form>
          {(state && tel) && (
            <div className="mt-5">
              <div className="w-[70%] max-md:p-7 max-md:w-full flex max-md:flex-col items-center max-md:items-start justify-between gap-5 shadow-md p-3 px-5 rounded-md border-2 border-slate-300">
                <div>
                  <h5 className="font-semibold text-lg mb-1">Phone</h5>
                  <p>{searchedUser?.phonenumber}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">First Name</h5>
                  <p className="capitalize">{searchedUser?.firstname}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">
                    Church ID
                  </h5>
                  <p>{searchedUser?.church_ID}</p>
                </div>
                <button className="shadow-lg">
                  <Link
                    to={`/dashboard/edit-user/${searchedUser?._id}`}
                    className="bg-teal-500 hover:bg-teal-400 duration-500 p-3 px-5 text-white rounded-sm"
                  >
                    Modify
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="mt-10 grid grid-cols-2 gap-10 pb-20 max-md:grid-cols-1">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800">Ministry Settings</h3>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-5 bg-blue-500 hover:bg-blue-400 duration-500 p-3 px-5 text-white rounded-sm max-sm:w-full"
            >
              Add Ministry
            </button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title={"Ministry"}
              data={ministryData}
              setData={setMinistryData}
              submitHandler={handleCreateMinistry}
            />
            <table className="mt-5 w-full text-left border-[2px] border-slate-300">
              <thead>
                <tr>
                  <th>Ministry</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allMinistriesData?.map((ministry, index) => (
                  <tr key={ministry?._id ?? index + 1}>
                    <td>{ministry?.ministry}</td>
                    <td className="flex gap-3">
                      {/* <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                    <FiEdit />
                  </span> */}
                      &nbsp;{" "}
                      <span
                        onClick={() => {
                          setDeleteId(ministry._id);
                          setShowDeleteModal(true);
                        }}
                        className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400"
                      >
                        <BsTrash3 />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-800">Mustard Settings</h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-5 bg-blue-500 hover:bg-blue-400 duration-500 p-3 px-5 text-white rounded-sm max-sm:w-full"
            >
              Add Mustard
            </button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title={"Mustard"}
              data={mustardData}
              setData={setMustardData}
              submitHandler={handleCreateMustard}
            />
            <table className="mt-5 w-full text-left border-[2px] border-slate-300">
              <thead>
                <tr>
                  <th>Mustard</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allMustardsData?.map((mustard, index) => (
                  <tr key={mustard?._id ?? index + 1}>
                    <td>{mustard?.mustard}</td>
                    <td className="flex gap-3">
                      {/* <span className="cursor-pointer text-blue-500 hover:border-b-2 border-b-blue-500">
                    <FiEdit />
                  </span> */}
                      &nbsp;{" "}
                      <span
                        onClick={() => {
                          setDeleteId(mustard._id);
                          setShowDeleteMustardModal(true);
                        }}
                        className="cursor-pointer text-red-400 hover:border-b-2 border-b-red-400"
                      >
                        <BsTrash3 />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* courses settings */}
<hr />
    <Lessons/>
      </div>
    </>
  );
};

export default Settings;
