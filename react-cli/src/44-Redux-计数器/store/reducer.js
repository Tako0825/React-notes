import { CHANGE_COUNTER } from "./actionTypes"

const initialState = {
    counter: 100
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_COUNTER: 
            return { ...state, counter: state.counter + action.count }
        default: return state
    }
}