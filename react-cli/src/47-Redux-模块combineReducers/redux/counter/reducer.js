import { DECREASE_COUNTER, INCREASE_COUNTER } from "./actionTypes"

const initialState = {
    counter: 200
}

export default (state = initialState, action) => {
    switch(action.type) {
        case INCREASE_COUNTER: 
            return { ...state, counter: state.counter + action.count }
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - action.count }
        default: return state
    }
}