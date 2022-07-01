import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectuserByEmail, selectUserById } from './usersSlice';
const UserDashBord = () => {
    const userId = useParams();
    // console.log(userId);
    const user = useSelector((state)=>selectuserByEmail(state,userId.userId))
    // console.log(user);
    if(!user){
        return (<section>
            <h2>PAGE not found</h2>
        </section>)
    }
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.phoneNumber}</h1>
        <h1>{user.isAdmin}</h1>
        <h1>{user.acType}</h1>
        <h1>{user.email}</h1>

    </div>
  )
}

export default UserDashBord