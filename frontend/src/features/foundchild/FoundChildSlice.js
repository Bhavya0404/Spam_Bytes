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
  name: "foundchild",
  initialState,
  reducers: {
    foundChildAdded: {
      reducer(state, action) {
        state.foundChildData.push(action.payload);
      },
      prepare(
        name,
        description,
        img,
        address,
        states,
        district,
        lastKnownLocation,
        isVerified,
        isAccepted,
        hasHousing,
        inSchool,
        compCompleted,
        reportedBy,
        rzp_contactId,
        rzp_fundAcId,
        payouts
      ) {
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
            isAccepted,
            hasHousing,
            inSchool,
            compCompleted,
            reportedBy,
            rzp_contactId,
            rzp_fundAcId,
            payouts,
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

export const selectFoundChildByState = (state, State) => {
  return state.foundchild.foundChildData.find(
    (data) => data.district === State
  );
};

export const getFoundChildStatus = (state) => state.foundchild.status;

export const getFoundChildError = (state) => state.foundchild.error;

export const getFoundChildById = (state, foundChildID) =>
  state.foundchild.foundChildData.find((id) => id._id === foundChildID);

export const getFoundChildByUser = (state, userId) => {
  return state.foundchild.foundChildData.filter(
    (id) => id.reportedBy === userId
  );
};

export default foundChildSlice.reducer;
