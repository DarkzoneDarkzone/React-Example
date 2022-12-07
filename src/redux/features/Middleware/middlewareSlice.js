import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: '',
    refreshToken: '',
    statusLogin: false
}

export const middlewareSlice = createSlice({
    name: 'middleware',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload.middleware.accessToken
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload.middleware.accessToken
        },
        setAllState: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.statusLogin = action.payload.statusLogin
        }
    }
})

export const { setAccessToken, setRefreshToken, setAllState} = middlewareSlice.actions
export default middlewareSlice.reducer