import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logut(state) {
            state.isAuthenticated = false;
        }
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
