import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/authAPI";
import { AppRootState } from "../../app/store";


const registerThunk = createAsyncThunk<
  { isRegistered: boolean; isError: null | string },
  { email: string; password: string },
  { rejectValue: string; state: AppRootState }
>('auth/register', async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    await authAPI.registration(arg.email, arg.password)

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
    .addCase(registerThunk.fulfilled, (state, action) => {
      state.isRegistered = action.payload.isRegistered
    })
    .addCase(registerThunk.rejected, (state, action) => {
      console.log(action.payload)
      state.isError = action.payload
    })
}

})

export const registrationReducer = registrationSlice.reducer
export const {} = registrationSlice.actions
export const registrationThunks = { registerThunk }