import { configureStore } from '@reduxjs/toolkit'
// import authReducer from '../slices/authSlice'
import userReducer from './slices/userSlice'
import slotsReducer from './slices/slotSlice'

export const store = configureStore({
  reducer: {
    // useraAuth: authReducer,
    userProfile: userReducer,
    slots: slotsReducer
  },
})