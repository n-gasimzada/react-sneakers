import { configureStore } from '@reduxjs/toolkit'
import sneakers from './slices/sneakersSlice'
import search from './slices/searchSlice'



export const store = configureStore({
  reducer: {
    sneakers,
    search
  },
})