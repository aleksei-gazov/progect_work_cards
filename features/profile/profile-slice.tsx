import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getProfile = createAsyncThunk(
  'profile/setProfile',
  async ()=> {

})

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoginIn: false
  },
  reducers: {

  }
})

export const profileReducer = profileSlice.reducer
export const {} = profileSlice.actions