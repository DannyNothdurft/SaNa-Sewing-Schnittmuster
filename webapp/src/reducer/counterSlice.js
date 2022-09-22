import { createSlice } from '@reduxjs/toolkit';
import data from '../data/schnittmuster.json';

export const counterSlice = createSlice({
    name: 'schnittmuster',
    initialState: {
        value: data,
        submit: "",
    },
    reducers: {
        setfilter(state, action) {
            state.submit = action.payload;
            console.log(state.submit)
        },
        decrement(state, action) {
            state.value = action.payload;
            console.log(state.value)
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
}
)

// Action creators are generated for each case reducer function
export const { setfilter, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer