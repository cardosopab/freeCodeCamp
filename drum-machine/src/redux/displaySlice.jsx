import { createSlice } from '@reduxjs/toolkit'

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
        value: 'Welcome'
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { update } = displaySlice.actions

export default displaySlice.reducer