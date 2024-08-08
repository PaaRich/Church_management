/* eslint-disable react/prop-types */
//import React from "react";
import Person from "./Person";
//import Profile from "./Profile";
import { committee } from "./Committee";
import BackBtn from "../../Reusable/BackBtn";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import { getAllUser } from "../../../Redux/features/auth/authSlice";
import Loader from "../../Reusable/Loader";

function People({ children }) {
  const dispatch= useDispatch()
  const {allUsers,isLoading,isSuccess}= useSelector((state)=>state.auth)

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
  },[users])
  // console.log(users)

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
          {allUsers?.map((person, index) => (
            <Link
              key={index}
              state={person}
              to={`/dashboard/people/${person._id}`}
            >
              <Person
                person={person?.firstname}
                ministry={person?.ministry}
                mustard_seed={person?.role}
              />
            </Link>
          ))}
        </div>
        <div className="w-1/2 h-full pr-4 pt-4 pl-4">{children}</div>
      </div>
    </div>
    </>
  );
}

export default People;
