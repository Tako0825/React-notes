import { ADD_PRODUCT } from "./actionTypes";

export const addProductAction = (product) => ({
    type: ADD_PRODUCT,
    product
})