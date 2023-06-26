import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    favorites: [],
    order: [],
    totalPrice: 0,
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

    clearCart: (state) => {
      state.items = []
    },

    addFavorites: (state, action) => {
      state.favorites.push(action.payload) 
    },

    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter(obj => obj.id !== action.payload)
    },

    addOrder: (state, action) => {
      state.order = action.payload
    }
  },
})



export const { addSneakers, removeSneakers, addFavorites, removeFavorites, addOrder, clearCart } = sneakersSlice.actions

export default sneakersSlice.reducer