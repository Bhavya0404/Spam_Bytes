import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const POST_URL = "http://localhost:5000/foundchild";

const initialState = {
  foundChildData: [],
  status: "idle",
  error: null,
};

export const fetchFoundChild = createAsyncThunk(
  "foundchild/fetchFoundChild",
  async () => {
    const response = await axios.get(POST_URL);
    return response.data;
  }
);

const foundChildSlice = createSlice({
  name: 'foundchild',
  initialState,
  reducers: {
    foundChildAdded: {
      reducer(state, action) {
        state.foundChildData.push(action.payload);
      },
      prepare(
        name,description,img,address,states,district,lastKnownLocation,isVerified,reportedBy) {
        return {
          payload: {
            name,
            description,
            img,
            address,
            state: states,
            district,
            lastKnownLocation,
            isVerified,
            reportedBy,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFoundChild.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchFoundChild.fulfilled, (state, action) => {
        state.status = "Succeeded";
        const loadedNgo = action.payload.map((data) => data);
        state.foundChildData = state.foundChildData.concat(loadedNgo);
      })
      .addCase(fetchFoundChild.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectFoundChild = (state) => state.foundchild.foundChildData;

export const getFoundChildStatus = (state) => state.foundchild.status;

export const getFoundChildError = (state) => state.foundchild.error;

export default foundChildSlice.reducer;