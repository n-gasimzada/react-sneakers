import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    favorites: [],
}

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {

    addSneakers: (state, action) => {
        state.items.push(action.payload)
    },

    removeSneakers: (state, action) => {

        state.items = state.items.filter(obj => obj.id !== action.payload)
        
    },

    addFavorites: (state, action) => {
      state.favorites.push(action.payload) 
    },

    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter(obj => obj.id !== action.payload)
    }
  },
})



export const { addSneakers, removeSneakers, addFavorites, removeFavorites } = sneakersSlice.actions

export default sneakersSlice.reducer