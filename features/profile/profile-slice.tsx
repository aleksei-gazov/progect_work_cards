import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../../api/profileApi";


export const getProfile = createAsyncThunk(
  'profile/setProfile',
  async (arg,  thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
      await profileAPI.me()
      return {isLoginIn:true}
  }
  catch (e:any){
      return rejectWithValue(e)
  }
})
export const updateStatus = createAsyncThunk(
  'profile/updateStatus',
  async (arg,  thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
      await profileAPI.updateStatus(arg.status)
      return {isLoginIn:true}
  }
  catch (e:any){
      return rejectWithValue(e)
  }
})

// const registerThunk = createAsyncThunk<{ isRegistered:boolean } , { email: string, password: string }, { rejectValue:string, state:AppRootState }>
// ("auth/register", async (arg, thunkAPI)=>{
//     const {rejectWithValue} = thunkAPI
//     try{
//         await registrationAPI.register(arg.email, arg.password)

//         return {isRegistered:true}
//     }
//     catch (e:any){
//         return rejectWithValue(e)
//     }
// })


const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoginIn: false,
    user: {
      id: '',
      email: 'email',
      name: 'Вася',
      avatar: 'avatar',
      status: 'gud status',
      publicCardPacksCount: 2,

      created: '', //data
      updated: '', //data
      isAdmin: false,
      verified: false,
      rememberMe: true,

      error: '',
    }
  },
  reducers: {

  },
  extraReducers:builder => {
    builder
        .addCase(getProfile.fulfilled, (state, action) => {
            state.user = action.payload.user
        })
        .addCase(updateStatus.fulfilled, (state, action) => {
            state.user.status = action.payload.user.status
        })
}

})

export const profileReducer = profileSlice.reducer
export const {} = profileSlice.actions
export const profileThunks = {getProfile, updateStatus}