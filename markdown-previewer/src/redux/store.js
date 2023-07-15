import { configureStore } from '@reduxjs/toolkit'
import markdownReducer from './markdownSlice'

export default configureStore({
    reducer: {
        markdown: markdownReducer
    }
})