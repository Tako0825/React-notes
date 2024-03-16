import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import cartReducer from './cart/reducer'
import counterReducer from './counter/reducer'
import { thunk } from 'redux-thunk'

// 使用 redux devtools 步骤一
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

export const store = createStore(
    // 结合若干 reducer
    combineReducers({
        cartReducer, counterReducer
    }),
    // 使用 redux devtools 步骤二
    // 使用 thunk 完成异步操作
    composeEnhancers(applyMiddleware(thunk))
)