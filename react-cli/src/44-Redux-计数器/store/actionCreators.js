import { CHANGE_COUNTER } from "./actionTypes"

export const changeCounter = (count) => {
    return {
        type: CHANGE_COUNTER,
        count
    }
}