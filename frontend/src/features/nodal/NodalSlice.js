import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const POST_URL = 'http://localhost:5000/nodal'

const initialState = {
  nodalData: {},
  status: 'idle',
  error: null,
}

export const fetchNodal = createAsyncThunk('nodal/fetchNodal', async () => {
  const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`}
  const response = await axios.get(POST_URL, {headers})
  return response.data
})

const nodalSlice = createSlice({
  name: 'nodal',
  initialState,
  reducers: {
    nodalAdded: {
      reducer(state, action) {
        state.nodalData = action.payload
      },

      prepare(state, district, officeLocation) {
        return {
          payload: {
            state,
            district,
            officeLocation,
          },
        }
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNodal.pending, (state, action) => {
        state.status = 'Loading'
      })
      .addCase(fetchNodal.fulfilled, (state, action) => {
        state.status = 'Succeeded'
        state.nodalData = action.payload
      })
      .addCase(fetchNodal.rejected, (state, action) => {
        state.status = 'Error'
        state.error = action.error.message
      })
  },
})

export const getNodalData = (state) => state.nodal.nodalData
export const getNodalStatus = (state) => state.nodal.status
export const getNodalError = (state) => state.nodal.error
export const getNodalById = (state, nodalID) =>
  state.nodal.nodalData.find((nod) => nod.user === nodalID)
export const getNodal = (state) => state.nodal.nodalData

export default nodalSlice.reducer
