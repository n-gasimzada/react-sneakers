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
      const findItem = state.items.find((obj) => obj.id === action.payload) 
      if(findItem) {
        state.items = state.items.filter(obj => obj.id !== findItem.id)
      }
    },

    addFavorites: (state, action) => {
      state.favorites.push(action.payload)
    }
  },
})



export const { addSneakers, removeSneakers, addFavorites } = sneakersSlice.actions

export default sneakersSlice.reducer