import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../redux/actions";
import UserCard from "../components/UserCard";

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersReducer.users);
    const getUsers = () =>{
        dispatch(fetchUsersAction())
    }
    useEffect(() => {
        getUsers();
    },[])
    return (
        <div>
            <div className='userBlock'>
                {users.map(user=> <UserCard userInfo={user} key={user.id}/>)}
            </div>
        </div>
    );
};

export default UsersPage;