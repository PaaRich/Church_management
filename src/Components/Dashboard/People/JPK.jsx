import { Outlet, Link } from "react-router-dom";
import BackBtn from "../../Reusable/BackBtn";
import { committee } from "./Committee";
import Person from "./Person";
import  {useDispatch , useSelector} from 'react-redux'
import { getAllUser } from "../../../Redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';


const JPK = () => {
  const dispatch = useDispatch()
  const {allChildren,isLoading}= useSelector((state)=>state.auth)

  const [users, setUsers]= useState(allChildren)
  const getUsers= async()=>{
    await dispatch(getAllUser())
  }

  useEffect(()=>{
    getUsers()
    setUsers(allChildren)
  },[])

  useEffect(()=>{
    setUsers(allChildren)
  },[allChildren])

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
    <div>
      <div>
      <BackBtn
          text="People"
          paddingAndMargin="mb-0 p-2"
          path={"/dashboard/people"}
        />
      </div>
    <div className="flex max-md:flex-col-reverse border-t-2 border-slate-300 mt-5 pt-5">
      <div className="basis-1/2 border-r-2 pr-2 ">
    
        <div className="mt-5 max-md:mt-10">
          {currentItems?.map((user) => (
            <Link key={user._id} to={user.firstname} state={user}>
              <Person photo={user?.user_photo} person={user?.firstname} ministry={user?.ministry} />
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
      </div>
      <div className="basis-1/2 ">
        <Outlet />
      </div>
    </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default JPK;
