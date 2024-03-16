import { CHANGE_COUNTER } from './actionTypes'

export const changeCounterAction = (count) => ({
    type: CHANGE_COUNTER,
    count
})

export const asyncChangeCounterAction = (count) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(changeCounterAction(count))
        }, 2000)
    }
}