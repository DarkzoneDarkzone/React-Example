import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import middlewareReducer from './features/Middleware/middlewareSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        middleware: middlewareReducer
    }
})