import { createSlice } from '@reduxjs/toolkit'

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {
        value: ''
    },
    reducers: {
        add: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { add } = markdownSlice.actions

export default markdownSlice.reducer
