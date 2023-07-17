import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        output: '',
        input: '',
        calculatorData: '',
    },
    reducers: {
        setOutput: (state, action) => {
            state.output = action.payload
        },
        setInput: (state, action) => {
            state.input = action.payload
        },
        setCaculatorData: (state, action) => {
            state.calculatorData = action.payload
        },
    }
})


export const { setOutput, setInput, setCaculatorData } = calculatorSlice.actions

export default calculatorSlice.reducer