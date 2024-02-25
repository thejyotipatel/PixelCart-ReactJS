import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../featureds/cart/cartSlice'
import userReducer from '../featureds/user/userSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
})
