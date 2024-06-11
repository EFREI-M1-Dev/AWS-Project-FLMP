import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
  id: '',
  mail: '',
  password: '',
  username: '',
  img: '',
  token: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.token = action.payload.token
      state.img = action.payload.user.avatar
      state.username = action.payload.user.username
    },
    setUpdateUser: (state, action) => {
      state.mail = action.payload.data.userUpdated.email
      state.username = action.payload.data.userUpdated.username
      state.img = action.payload.data.userUpdated.img
    },
    logoutLoggedUser: (state) => {
      state.id = initialState.id
      state.mail = initialState.mail
      state.password = initialState.password
      state.username = initialState.username
      state.img = initialState.img
      state.token = initialState.token
      state.isFetching = initialState.isFetching
      state.isSuccess = initialState.isSuccess
      state.isError = initialState.isError
      state.errorMessage = initialState.errorMessage
    },
  },
})

export const { setLoggedUser, setUpdateUser, logoutLoggedUser } =
  userSlice.actions
export default userSlice.reducer

export const userSelector = (state: RootState) => state.user
