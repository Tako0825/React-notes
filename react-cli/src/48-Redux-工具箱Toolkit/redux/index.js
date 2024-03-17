import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './cart/reducer'
import { counterReducer } from './counter/reducer'

export const store = configureStore({
    reducer: {
        cartReducer,
        counterReducer
    }
})