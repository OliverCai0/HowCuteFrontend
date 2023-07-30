import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        sessionToken: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: ""
    },
    reducers : {
        setCredentials : (state, action) => {
            state = {...state, action }
        },
        setSessionToken : state => {
            
        }
    }
})