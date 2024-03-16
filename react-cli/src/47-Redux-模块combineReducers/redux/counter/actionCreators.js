import { DECREASE_COUNTER, INCREASE_COUNTER } from "./actionTypes";

export const increaseCounterAction = (count) => ({
    type: INCREASE_COUNTER,
    count
})

export const decreaseCounterAction = (count) => ({
    type: DECREASE_COUNTER,
    count
})