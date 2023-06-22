import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {

    addSneakers: (state, action) => {
        state.items.push(action.payload)
    }
  },
})



export const { addSneakers } = sneakersSlice.actions

export default sneakersSlice.reducer