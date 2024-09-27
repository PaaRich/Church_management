import React, { useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLesson,
  getAllLessons,
} from "../../../Redux/features/lessons/lessonsSlice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../../Reusable/Loader";
import Confirm from "../../Reusable/Confirm";

function Lessons() {
  const dispatch = useDispatch();
  const { lesson_loading, allLessons } = useSelector((state) => state.lesson);

  const [lessons, setLessons] = useState(allLessons);
  const [fileDeleted, setFileDeleted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const deleteItem = async () => {
    await dispatch(deleteLesson(deleteId));
    setFileDeleted(false);
  };

  const getLessons = async () => {
    await dispatch(getAllLessons());
  };
  useEffect(() => {
    getLessons();
    setLessons(allLessons);
  }, [fileDeleted]);

  useEffect(() => {
    setLessons(allLessons);
  }, [allLessons]);

  // pagination here
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const items = [...Array(100).keys()]; // Example data
  const handleChange = (event, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = lessons?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {lesson_loading && <Loader />}
      {showConfirm ? (
        <Confirm
          setShowDeleteModal={setShowConfirm}
          onDelete={deleteItem}
          setFileDeleted={setFileDeleted}
        />
      ) : null}
      <div className="mt-5">
        <h3 className="font-semibold text-2xl text-slate-800">
          Lesson Settings
        </h3>
        <button className="mt-5 bg-blue-500 hover:bg-blue-400 duration-500 p-3 px-5 text-white rounded-sm max-sm:w-full">
          <Link to={"/dashboard/add-lesson"}>Add new Lesson</Link>
        </button>

        {/* lessons table */}
        <div className="overflow-x-scroll">
          <table className="w-full mt-5 border-2 border-slate-700 text-left mb-5 overflow-x-scroll">
            <thead>
              <tr>
                <th>Date Created</th>
                <th>Category</th>
                <th>Course Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((lesson) => (
                <tr key={lesson._id}>
                  <td>
                    {new Date(lesson.createdAt).toLocaleString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td>{lesson?.course_category}</td>
                  <td>{lesson?.course_title}</td>
                  <td className="flex items-center gap-5">
                    <span className="cursor-pointer">
                      <Link to={`/dashboard/edit-lesson/${lesson?._id}`}>
                        <CiEdit size={25} color="dodgerblue" />
                      </Link>
                    </span>
                    <span
                      onClick={() => {
                        setDeleteId(lesson?._id);
                        setShowConfirm(true);
                      }}
                      className="cursor-pointer"
                    >
                      <BsTrash3 color="red" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Pagination
            count={Math.ceil(lessons?.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </div>
      </div>
    </>
  );
}

export default Lessons;
