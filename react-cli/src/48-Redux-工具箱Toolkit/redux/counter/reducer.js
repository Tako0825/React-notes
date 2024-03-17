import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const asyncChangeCounter = createAsyncThunk(
    "counter/asyncChangeCounter",
    async (payload, store) => {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(payload)
            }, 2000)
        })
    }
)

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 500
    },
    // 处理同步 actions 
    reducers: {
        increaseCounter(state, action) {
            state.counter = state.counter + action.payload
        },
        decreaseCounter(state, action) {
            state.counter = state.counter - action.payload
        }
    },
    // 处理异步 actions
    extraReducers: builder => {
        builder
        .addCase(asyncChangeCounter.pending, () => {
            console.log("asyncChangeCounter.pending");
        })
        .addCase(asyncChangeCounter.fulfilled, (state, action) => {
            console.log("asyncChangeCounter.fulfilled");
            state.counter = state.counter + action.payload
        })
        .addCase(asyncChangeCounter.rejected, () => {
            console.log("asyncChangeCounter.rejected");
        })
    }
})

export const { increaseCounter, decreaseCounter } = counterSlice.actions

export const counterReducer = counterSlice.reducer