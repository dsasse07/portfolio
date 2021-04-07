import { createSlice } from '@reduxjs/toolkit'

export const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = mediaSlice.actions

export default mediaSlice.reducer