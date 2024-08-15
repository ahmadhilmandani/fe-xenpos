import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import openSidebarAddSlice from './features/openSidebarAddSlic'

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    openSidebarAdd: openSidebarAddSlice.reducer,
  }
})