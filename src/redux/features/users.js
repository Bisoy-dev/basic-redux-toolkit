import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const usersSlice = createSlice({
    name : 'users',
    initialState : {
        users : [],
        isLoading: false,
        errorMessage : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = 'Something went wrong!'
            console.log(action.error)
        })
        
    }
})

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const api = 'https://jsonplaceholder.typicode.com/users'
    const response = await axios.get(api)
    return response.data
})

export default usersSlice.reducer;