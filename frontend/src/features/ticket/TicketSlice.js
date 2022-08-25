import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    resolve: null
}

const resolveState = createSlice({
    name: 'resolve',
    initialState,
    reducers: {
        pending(state) {
            state.resolve = false;
        },
        resolved(state) {
            state.resolve = true;
        },
        reset(state) {
            state.resolve = null;
        }
    }
})

export const {pending, resolved, reset} = resolveState.actions;
export default resolveState.reducer;