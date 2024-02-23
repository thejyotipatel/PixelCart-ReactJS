import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../featureds/cartSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
})
