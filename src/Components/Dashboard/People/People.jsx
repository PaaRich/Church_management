/* eslint-disable react/prop-types */
//import React from "react";
import Person from "./Person";
//import Profile from "./Profile";
//import { committee } from "./Committee";
import BackBtn from "../../Reusable/BackBtn";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import { getAllUser } from "../../../Redux/features/auth/authSlice";
import Loader from "../../Reusable/Loader";
import InfiniteScroll from 'react-infinite-scroll-component';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function People({ children }) {
  const dispatch= useDispatch()
  const {allUsers,isLoading}= useSelector((state)=>state.auth)

  const [users, setUsers]= useState(allUsers)

  const getUsers= async()=>{
    await dispatch(getAllUser())
  }

  useEffect(()=>{
    getUsers()
    setUsers(allUsers)
  },[])

  useEffect(()=>{
    setUsers(allUsers)
  },[allUsers])
  // console.log(users)

    // pagination here
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const items = [...Array(100).keys()]; // Example data
    const handleChange = (event, value) => {
      setPage(value);
    };
    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = users?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
    {isLoading && <Loader/>}
    <div className="p-0">
      <div className="c-people-header flex">
        <BackBtn
          text="People"
          paddingAndMargin="mb-5 p-2"
          path={"/dashboard"}
        />
        <div className="w-1/2">
          <div></div>
        </div>
      </div>
      <div className="flex h-full">
        <div className="w-1/2 h-full pr-4 border-r-2 ">
          {currentItems?.map((person, index) => (
            <Link
              key={index}
              state={person}
              to={`/dashboard/people/${person?.firstname}`}
            >
              <Person
                person={person?.firstname}
                ministry={person?.ministry}
                mustard_seed={person?.role}
              />
            </Link>
          ))}
          <div className="mt-8">
                 <Pagination 
        count={Math.ceil(users?.length / itemsPerPage)} 
        page={page} 
        onChange={handleChange} 
        color="primary"
      />
          </div>
        </div>
        <div className="w-1/2 h-full pr-4 pt-4 pl-4">{children}</div>
      </div>
    </div>
    </>
  );
}

export default People;
