import { configureStore } from '@reduxjs/toolkit'
import sneakers from './slices/sneakersSlice'



export const store = configureStore({
  reducer: {
    sneakers,
  },
})