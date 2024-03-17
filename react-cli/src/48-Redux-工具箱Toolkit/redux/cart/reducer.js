import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [
            { id: 1, name: "背带裤" },
            { id: 2, name: "篮球" },
            { id: 3, name: "中分头" }
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        }
    }
})

export const { addProduct } = cartSlice.actions

export const cartReducer = cartSlice.reducer