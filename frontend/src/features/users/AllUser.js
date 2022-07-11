import React from 'react'
import { useSelector } from 'react-redux'
import {
  getUsersError,
  getUsersStatus,
  selectAllUsers,
  selectUserById,
} from './usersSlice'

const AllUser = () => {
  const users = useSelector(selectAllUsers)
  const error = useSelector(getUsersError)
  const usersStatus = useSelector(getUsersStatus)

  let content
  if (usersStatus === 'loading') {
    content = <p>loading</p>
  } else if (usersStatus === 'Succeeded') {
    console.log(users)
    content = users.map((user) => <h1> {user.email}</h1>)
  } else if (usersStatus === 'failed') {
    content = <p>{error}</p>
  }

  return <div>{content}</div>
}

export default AllUser
