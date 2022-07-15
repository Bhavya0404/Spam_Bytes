import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const POST_URL = 'http://localhost:5000/users'

const initialState = {
  users: [],
  status: 'idle',
  error: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const responce = await axios.get(POST_URL)
  return responce.data
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.users.push(action.payload)
      },
      prepare(email, password, isAdmin, name, phoneNumber, acType) {
        return {
          payload: {
            email,
            password,
            isAdmin,
            name,
            phoneNumber,
            acType,
          },
        }
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'Loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'Succeeded'

        const loadedUser = action.payload.map((post) => post)
        state.users = state.users.concat(loadedUser)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})
export const selectAllUsers = (state) => state.users.users
export const getUsersStatus = (state) => state.users.status
export const getUsersError = (state) => state.users.error
export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user._id === userId)

export const selectuserByEmail = (state,emailId)=>
  state.users.users.find((user)=>user.email===emailId)
export default userSlice.reducer
