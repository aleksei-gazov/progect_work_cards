import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const getProfile = createAsyncThunk(
  'profile/setProfile',
  async ()=> {

})

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    
  },
  reducers: {

  }
})

export const profileReducer = profileSlice.reducer
export const {} = profileSlice.actions