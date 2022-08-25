import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    state: null
}

const resolveState = createSlice({
    name: 'statename',
    initialState,
    reducers: {
        set(state,action) {
            state.state = action.payload;
        }
     
    }
})

export const {set} = resolveState.actions;
export default resolveState.reducer;