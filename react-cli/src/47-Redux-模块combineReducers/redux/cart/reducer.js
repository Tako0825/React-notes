import { ADD_PRODUCT } from "./actionTypes"

const initialState = {
    products: [
        { id: 1, name: "篮球", price: 100 },
        { id: 2, name: "背带裤", price: 200 },
        { id: 3, name: "中分头", price: 300 }
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT: {
            const products = [...state.products]
            products.push(action.product)
            return { ...state, products }
        }
        default: return state
    }
}