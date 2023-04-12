import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../../api/profileApi";


const registerThunk = createAsyncThunk<
  { isRegistered: boolean; isError: null | string },
  { email: string; password: string },
  { rejectValue: string; state: AppRootState }
>('auth/register', async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    await registrationAPI.register(arg.email, arg.password)

    return { isRegistered: true, isError: null }
  } catch (e: any) {
    return rejectWithValue(e.response.data.error) //передаст ошибку с сервера, в extra reducer(action.payload)
  }
})

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    isRegistered: false,
    isError: null as string | null | undefined,
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