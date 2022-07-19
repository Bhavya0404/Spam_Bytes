import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const POST_URL = "http://localhost:5000/auth/";

const initialState = {
  users: {},
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
  const response = await axios.get(POST_URL, { headers });
  return response.data?.user;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.users.push(action.payload);
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
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "Succeeded";

        const loadedUser = action.payload;
        state.users = loadedUser;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export const getUser = (state) => state.users.users;
export default userSlice.reducer;
