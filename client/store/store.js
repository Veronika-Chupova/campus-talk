import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import slotsReducer from './slices/slotSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    slots: slotsReducer
  },
})