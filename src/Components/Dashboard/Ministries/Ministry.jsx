/* eslint-disable react/prop-types */
//import React from 'react'
import { useParams, Outlet, Link } from "react-router-dom";
import BackBtn from "../../Reusable/BackBtn";
import Person from "../People/Person";
//import { committee } from "../People/Committee";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMinistries } from "../../../Redux/features/auth/authSlice";
import Loader from "../../Reusable/Loader";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Ministry = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { ministryMembers, isLoading } = useSelector((state) => state.auth);

  const [members, setMembers] = useState(ministryMembers);

  const getMembers = async () => {
    await dispatch(getMinistries(id));
  };

  useEffect(() => {
    getMembers();
    setMembers(ministryMembers);
  }, []);

  useEffect(() => {
    setMembers(ministryMembers);
  }, [ministryMembers]);


     // pagination here
     const [page, setPage] = useState(1);
     const itemsPerPage = 10;
     const items = [...Array(100).keys()]; // Example data
     const handleChange = (event, value) => {
       setPage(value);
     };
     const startIndex = (page - 1) * itemsPerPage;
     const currentItems = members?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex">
        <div className="w-1/2 border-r-2 border-r-slate-300">
          <span className="flex items-center">
            <BackBtn
              text="Ministries"
              paddingAndMargin="p-2 mb-1"
              path={"/dashboard/ministries"}
            />
            <p className="text-xl font-medium ml-10">{id}</p>
          </span>
          <span>
            <p className="ml-4 text-xl mb-1">President</p>
            <Person person="Jane Smith" position="President" />
          </span>
          <div>
            <p className="ml-4 text-xl my-2">Members</p>
            <div>
              {currentItems?.length > 0 ? (
                currentItems?.map((person) => (
                  <Link to={person?.firstname} state={person} key={person._id}>
                    <Person
                      person={person?.firstname}
                      mustard_seed={person?.role}
                    />
                  </Link>
                ))
              ) : (
                <div>
                  <h3 className="text-xl p-5 bg-slate-200/50 mt-10">
                    No Members found under this Ministry
                  </h3>
                </div>
              )}
            </div>
            <div className="mt-8">
                 <Pagination 
        count={Math.ceil(members?.length / itemsPerPage)} 
        page={page} 
        onChange={handleChange} 
        color="primary"
      />
          </div>
          </div>
        </div>
        <div className="w-1/2 px-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Ministry;
