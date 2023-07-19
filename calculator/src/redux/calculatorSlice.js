import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        output: '',
        input: '',
        isSubmitted: false,
    },
    reducers: {
        setOutput: (state, action) => {
            state.output = action.payload
        },
        setInput: (state, action) => {
            state.input = action.payload
        },
        setSubmitted: (state, action) => {
            state.isSubmitted = action.payload
        },
    }
})


export const { setOutput, setInput, setSubmitted } = calculatorSlice.actions

export default calculatorSlice.reducer