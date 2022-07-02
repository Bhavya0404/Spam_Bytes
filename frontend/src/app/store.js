import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import ngoReducer from '../features/ngo/ngoSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    ngo: ngoReducer,
  },
})
