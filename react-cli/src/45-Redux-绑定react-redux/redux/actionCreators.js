import { CHANGE_COUNTER } from './actionTypes'

export const changeCounterAction = (count) => ({
    type: CHANGE_COUNTER,
    count
})