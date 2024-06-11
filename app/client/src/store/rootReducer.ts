import { combineReducers } from '@reduxjs/toolkit'
import userConnectedSlice from '../features/userConnectedSlice'

export const rootReducer = combineReducers({
  user: userConnectedSlice,
})
