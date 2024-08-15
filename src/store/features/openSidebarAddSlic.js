import { createSlice } from '@reduxjs/toolkit'

export const openSidebarAddSlice = createSlice({
  name: 'openSidebarAdd',
  initialState: {
    value: false
  },
  reducers: {
    open: state => {
      state.value = true
    },
    close: state => {
      state.value = false
    },
    toggle: (state) => {
      state.value = !state.value
    }
  }
})

// Action creators are generated for each case reducer function
export const { open, close, toggle } = openSidebarAddSlice.actions

export default openSidebarAddSlice