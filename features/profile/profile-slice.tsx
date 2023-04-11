import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { profileAPI } from "../../api/profileApi";


export const getProfile = createAsyncThunk(
  'profile/setProfile',
  async () => {
  //   try{
  //     await profileAPI.me()
  //     return {isLoginIn:true}
  // }
  // catch (e:any){
  //     return isRejectedWithValue(e)
  // }
}
)
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
      name: 'Вася',
      avatar: 'avatar',
      status: 'gud status',
      email: 'email'
    }
  },
  reducers: {

  },
  extraReducers:builder => {
    builder
        .addCase(getProfile.fulfilled, (state, action) => {
            state.user = action.payload.user
        })
}

})

export const profileReducer = profileSlice.reducer
export const {} = profileSlice.actions