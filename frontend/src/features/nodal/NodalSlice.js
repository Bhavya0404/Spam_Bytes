import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const POST_URL = "http://localhost:5000/nodal";

const initialState = {
    nodalData: [],
    status: 'idle',
    error: null,
};

export const fetchNodal = createAsyncThunk('nodal/fetchNodal', async () => {
    const responce = await axios.get(POST_URL);
    return responce.data;
})


const nodalSlice = createSlice({
    name: "nodal",
    initialState,
    reducers: {
        nodalAdded: {
            reducer(state, action) {
                state.nodalData.push(action.payload);
            },

            prepare(state, district, officeLocation) {
                return {
                    payload: {
                        state,
                        district,
                        officeLocation
                    },
                };
            },
        },

    },
    extraReducers(builder) {
        builder
            .addCase(fetchNodal.pending, (state, action) => {
                    state.status = 'Loading'
            })
            .addCase(fetchNodal.fulfilled, (state, action) => {
                state.status = 'Succeeded';
                const Data = action.payload.map((data) => {
                    return data;
                })
                state.nodalData = state.nodalData.concat(Data);
            })
            .addCase(fetchNodal.rejected, (state, action) => {
                state.status = 'Error';
                state.error = action.error.message;
            })
    },
});

export const getNodalData = (state) => state.nodal.nodalData;
export const getNodalStatus = (state) => state.nodal.status;
export const getNodalError = (state) => state.nodal.error;



export default nodalSlice.reducer;